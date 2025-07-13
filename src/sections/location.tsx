"use client";

import Title from "@/components/title";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaDirections } from "react-icons/fa";

export default function Location() {
  const location = {
    name: "Gedung Serba Guna Kota Bekasi",
    address:
      "Jl. Jend. Ahmad Yani No.1, Bekasi Jaya, Kec. Bekasi Tim., Kota Bekasi, Jawa Barat 17112",
    gmapsUrl: "https://goo.gl/maps/XYZ123", // Ganti dengan link Google Maps yang valid
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1234567890!2d106.987654321!3d-6.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDcnMjQuNCJTIDEwNsKwNTknMTUuNiJF!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid",
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-16 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-4xl mb-12"
        >
          <Title color="white">Lokasi Acara</Title>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="text-indigo-500 mt-1">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-neutral-200">
                  {location.name}
                </h3>
                <p className="text-neutral-400 mt-2">{location.address}</p>
              </div>
            </div>

            <a
              href={location.gmapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-300"
            >
              <FaDirections />
              <span>Buka di Google Maps</span>
            </a>

            <div className="mt-8 space-y-4">
              <h4 className="text-xl font-medium text-neutral-200">
                Parkir & Transportasi
              </h4>
              <ul className="space-y-2 text-neutral-400">
                <li>• Area parkir luas tersedia di lokasi</li>
                <li>• 10 menit dari Stasiun Bekasi</li>
                <li>• Akses mudah via Transjakarta & angkutan kota</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-80 md:h-96 rounded-xl overflow-hidden shadow-xl"
          >
            <iframe
              src={location.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
              title="Lokasi Pernikahan"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
