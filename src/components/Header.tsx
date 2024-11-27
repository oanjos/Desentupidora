import React from 'react';
import { Clock } from 'lucide-react';

interface HeaderProps {
  phoneNumber: string;
  formattedPhoneNumber: string;
}

export function Header({ phoneNumber, formattedPhoneNumber }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      {/* Conteúdo do Header */}
      <div className="container mx-auto px-4 sm:px-2">
        <div className="flex flex-wrap items-center justify-between h-auto py-3 sm:py-0">
          {/* Logo */}
          <div className="flex items-center mb-3 sm:mb-0">
            <img
              src="../img_Logo_Final.png"
              alt="D.D. Associados"
              className="h-16 w-auto sm:h-20"
            />
            <div className="ml-2">
              <h1 className="text-base sm:text-lg font-bold text-gray-900">
                D.D. Associados
              </h1>
              <p className="text-xs text-gray-600">
                Desentupidora & Detetizadora
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center text-center sm:text-right">
            <div>
              <a
                href={`tel:${phoneNumber}`}
                className="block text-sm sm:text-lg font-bold text-gray-900 hover:text-yellow-500 transition-colors"
              >
                {formattedPhoneNumber}
              </a>
              <div className="flex items-center justify-center sm:justify-end text-xs text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                <span>
                  Atendimento 24h <br />
                  7 dias por semana
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
