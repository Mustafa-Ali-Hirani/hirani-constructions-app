import React from 'react';
import { Link } from 'react-router-dom'; // Use Link to navigate back home

function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-6 text-gray-700 space-y-6">
        <h1 className="text-3xl font-bold text-black">PRIVACY POLICY</h1>
        
        <h2 className="text-xl font-bold text-black pt-4">AVISO LEGAL</h2>
        <p>Las explicaciones e información proporcionadas en esta página son solo explicaciones e información generales y a grandes rasgos sobre cómo redactar tu propio documento de Política de Privacidad. No debes considerar este artículo como asesoramiento legal o recomendaciones sobre lo que realmente debes hacer, porque no podemos saber de antemano cuáles son las políticas de privacidad específicas que deseas establecer entre tu negocio y tus clientes y visitantes. Te recomendamos que busques asesoramiento legal para entender y elaborar tu propia Política de Privacidad.</p>
        
        <h2 className="text-xl font-bold text-black pt-4">POLÍTICA DE PRIVACIDAD: FUNDAMENTOS</h2>
        <p>Dicho esto, una Política de Privacidad es una declaración que divulga una parte o la totalidad de las prácticas de recopilación, uso, divulgación, procesos y gestión de datos de los usuarios y clientes de un sitio web. También suele incluir una declaración sobre el compromiso del sitio web de proteger la privacidad de sus visitantes o clientes, y una explicación sobre los diferentes mecanismos que el sitio web aplica para proteger la privacidad.</p>
        <p>Las distintas jurisdicciones tienen diferentes obligaciones legales sobre lo que debe incluirse en una Política de Privacidad. Tú eres responsable de asegurarte de que cumples con la legislación pertinente a tus actividades y ubicación.</p>
        
        <h2 className="text-xl font-bold text-black pt-4">QUÉ DEBE INCLUIRSE EN EL DOCUMENTO DE POLÍTICA DE PRIVACIDAD</h2>
        <p>En términos generales, una Política de Privacidad suele abordar este tipo de cuestiones: los tipos de información que el sitio web recopila y la forma en que recopila los datos, una explicación sobre por qué el sitio web recopila este tipo de información, cuáles son las prácticas del sitio web para compartir la información con terceros, las formas en que tus visitantes y clientes pueden ejercer sus derechos de acuerdo con la legislación de privacidad pertinente, las prácticas específicas relacionadas con la recopilación de datos de menores y mucho más.</p>
        <p>Para obtener más información, lee nuestro artículo Cómo crear una Política de Privacidad.</p>

        <div className="pt-8">
          <Link to="/" className="text-indigo-600 hover:underline font-semibold">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;