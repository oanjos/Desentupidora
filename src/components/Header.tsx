import React from 'react';
import { Clock } from 'lucide-react';

interface HeaderProps {
  phoneNumber: string;
  formattedPhoneNumber: string;
}

export function Header({ phoneNumber, formattedPhoneNumber }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
  {/* Conteúdo do header */}
      <div className="container mx-auto px-1">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center" style={{ marginLeft: '-8px' }}>
            <img
              src="../img_Logo_Final.png"
              alt="D.D. Associados"
              className="h-20 w-auto"
            />
            <div className="ml-2">
              <h1 className="text-lg font-bold text-gray-900">D.D. Associados</h1>
              <p className="text-xs text-gray-600">Desentupidora & Detetizadora</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center">
            <div className="text-right mr-4">
              <a href={`tel:${phoneNumber}`} className="text-lg font-bold text-gray-900 hover:text-yellow-500 transition-colors">
                {formattedPhoneNumber}
              </a>
              <div className="flex items-center text-xs text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                <span>
                  Atendimento 24h <br /> 7 dias por semana
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}