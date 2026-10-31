import React from 'react';
import { X, ExternalLink, Folder, CheckCircle } from 'lucide-react';

/**
 * ✏️ PANDUAN PENGATURAN LINK GOOGLE DRIVE:
 * 1. Buka Google Drive Anda, buat satu folder (misal: "CV - [Nama]")
 * 2. Upload file CV Bahasa Indonesia dan CV English ke folder tersebut
 * 3. Klik kanan pada folder -> pilih "Bagikan" (Share) -> ganti akses ke "Siapa saja yang memiliki link" (Anyone with link)
 * 4. Salin link folder tersebut dan tempelkan di bawah ini:
 */
export const GOOGLE_DRIVE_FOLDER_URL = 'https://drive.google.com/drive/folders/13eMNsV2kT9gXwVz8YMzSMPuDmqkuiJy9?usp=drive_link';

export default function CV({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="reiatsu-card bg-[#040d1a] rounded-2xl sm:rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 space-y-6 text-left relative border-cyan-500/40 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-gray-400 hover:text-white p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5 pr-6 sm:pr-0">
          <span className="text-[10px] sm:text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Folder className="w-3.5 h-3.5" />
            Official Credentials &bull; Google Drive
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-bankai">
            CURRICULUM VITAE
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Official Google Drive repository containing both English and Indonesian ATS-Friendly CV documents.
          </p>
        </div>

        {/* Single Folder Showcase Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.3)] shrink-0">
              <Folder className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                CV Documents Folder (English & Indonesian)
              </h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Available in ATS-friendly PDF format following standard industry guidelines, ready for instant preview or direct download.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={GOOGLE_DRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.7)] transition-all flex items-center justify-center gap-2 border border-cyan-300/40 cursor-pointer group"
            >
              <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Buka Folder CV di Google Drive</span>
            </a>
          </div>
        </div>

        {/* Highlights */}
        <div className="border-t border-white/10 pt-4 grid grid-cols-2 gap-3 text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Format PDF ATS-Friendly</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Versi ID & EN Lengkap</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Akses Langsung Drive</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Selalu Ter-update</span>
          </div>
        </div>

      </div>
    </div>
  );
}

