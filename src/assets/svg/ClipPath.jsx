const ClipPath = () => {

  // El componente ClipPath define una forma recortada usando un elemento SVG invisible y un elemento <path> con la forma deseada.
  // Esta forma recortada se usa luego para recortar la imagen superpuesta sobre el fondo del beneficio, creando un efecto visual particular.


  return (
    <svg
      className="block" //  el SVG en sí mismo no tendrá ningún tamaño visibl
      width={0}
      height={0}
    >
      <clipPath
        id="benefits"                     // identificador único
        clipPathUnits="objectBoundingBox" // las unidades usadas para definir la forma del clip path son relativas al cuadro delimitador del objeto que lo referencia (en este caso, la imagen del hover).
      >
        <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0" />
      </clipPath>
    </svg>
  );
};

export default ClipPath;
