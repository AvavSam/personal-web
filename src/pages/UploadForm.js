// src/components/UploadCertificateForm.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { db, storage } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const UploadCertificateForm = () => {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [issuedDate, setIssuedDate] = useState("");
  const [credentialId, setCredentialId] = useState("");
  const [skills, setSkills] = useState("");
  const [color, setColor] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Step 1: Upload the image to Firebase Storage
      const storageRef = ref(storage, `certificates/${imageFile.name}`);
      await uploadBytes(storageRef, imageFile);
      const imageUrl = await getDownloadURL(storageRef);

      // Step 2: Add the certificate data to Firestore
      await addDoc(collection(db, "certificates"), {
        name,
        organization,
        issuedDate,
        credentialId,
        skills: skills.split(","), // Split skills string into an array
        image: imageUrl,
        color,
        link,
      });

      alert("Certificate uploaded successfully!");
    } catch (error) {
      console.error("Error uploading certificate: ", error);
      alert("Failed to upload certificate.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full md:w-3/4">
      <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="bg-gray-800 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Upload Certificate</h2>
        <form onSubmit={handleSubmit} className="space-y-4 [&>*]:flex [&>*]:w-1/2 [&>*]:justify-center [&>input]:p-2 [&>input]:rounded-lg [&>input]:bg-gray-700">
          <input type="text" placeholder="Certificate Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="text" placeholder="Organization" value={organization} onChange={(e) => setOrganization(e.target.value)} required />
          <input type="text" placeholder="Issued Date" value={issuedDate} onChange={(e) => setIssuedDate(e.target.value)} required />
          <input type="text" placeholder="Credential ID" value={credentialId} onChange={(e) => setCredentialId(e.target.value)} />
          <input type="text" placeholder="Skills (comma-separated)" value={skills} onChange={(e) => setSkills(e.target.value)} required />
          <input type="text" placeholder="Card Color (e.g., bg-green-900/30)" value={color} onChange={(e) => setColor(e.target.value)} required />
          <input type="file" onChange={(e) => setImageFile(e.target.files[0])} required />
          <input type="text" placeholder="Optional Link (e.g., certificate URL)" value={link} onChange={(e) => setLink(e.target.value)} />
          <button type="submit" disabled={loading} className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
            {loading ? "Uploading..." : "Upload Certificate"}
          </button>
        </form>
      </motion.section>
    </main>
  );
};

export default UploadCertificateForm;
