// Types
export interface BlogPost {
  id: number
  title: string
  description: string
  slug: string
  content: string
  date: string
  author: string
  readTime: string
  category: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "La gran derrota del progresismo en Estados Unidos",
    description: "Se abre un nuevo horizonte para el gran país del norte y para el mundo tras las elecciones presidenciales de 2024.",
    slug: "derrota-progresismo-eeuu",
    image: "/images/blog-images/denis-jesus-palma-abanto-trump-maga.jpg",
    content: `
      <div class="w-full aspect-video relative mb-8">
        <img src="/images/blog-images/denis-jesus-palma-abanto-trump-maga.jpg" alt="Derrota del progresismo en EEUU" class="object-cover w-full" />
      </div>

      <p>El triunfo electoral de Donald Trump en EEUU ha dejado patitiesos a los progresistas y globalistas allí y en todo el mundo. Trump ha obtenido 301 votos electorales, superando largamente la mayoría requerida de 270 votos frente a los obtenidos por Kamala Harris, además de ganar el voto popular por aproximadamente 5 millones de votos.</p>

      <h2>Cambios en el panorama electoral</h2>
      <p>Las elecciones de 2024 han mostrado un aumento significativo en la participación electoral, incorporando nuevos votantes entre latinos/hispanos y comunidades tradicionalmente alejadas del proceso electoral. Trump aumentó en un 18% su votación entre los latinos/hispanos, a pesar de las campañas que lo acusaban de racista y anti-latino.</p>

      <h2>Victoria en estados clave</h2>
      <p>Trump ganó en estados cruciales como Texas, Florida, y los llamados 'swing states' como Arizona, Georgia, Carolina del Norte, Michigan y Wisconsin. El "muro azul" demócrata en Pennsylvania, Michigan y Wisconsin se derrumbó ante la preferencia por Trump.</p>

      <h2>Nuevo diseño de hegemonía política</h2>
      <p>Además de la victoria presidencial, el Partido Republicano consiguió la mayoría en el Senado con 52 escaños y en la Cámara de Representantes, abriendo el camino para materializar el programa "Make America Great Again" sin obstrucciones legislativas.</p>
    `,
    date: "2024-11-14",
    author: "Denis Jesus Palma Abanto",
    readTime: "8 min read",
    category: "Política"
  },
  {
    id: 2,
    title: "El progresismo y el colectivismo sin peruanidad",
    description: "Un análisis de la estrategia para boicotear la Cumbre Mundial de la APEC en Lima y sus implicaciones para el país.",
    slug: "progresismo-sin-peruanidad",
    image: "/images/blog-images/denis-jesus-palma-abanto-apec.jpg",
    content: `
      <div class="w-full aspect-video relative mb-8">
        <img src="/images/blog-images/denis-jesus-palma-abanto-apec.jpg" alt="APEC Summit en Lima" class="object-cover w-full" />
      </div>

      <p>El proyecto de boicotear la Cumbre Mundial de la APEC en Lima revela corrientes ideológicas para las cuales la idea de Perú y peruanidad les es absolutamente relativa. Esta estrategia busca el fracaso de una reunión que representa el 62% del PBI mundial y aproximadamente el 65% de nuestras exportaciones.</p>

      <h2>El pretexto de la inseguridad</h2>
      <p>El argumento para desarrollar la estrategia del boicot es el desborde de la ola criminal que golpea a los peruanos. Sin embargo, no existe conexión lógica entre un potencial fracaso del Perú en la APEC y el fin de la crisis de seguridad.</p>

      <h2>La verdadera agenda</h2>
      <p>Para las corrientes progresistas, neocomunistas y comunistas, la idea de un Estado nacional y una economía soberana representa un obstáculo en sus apuestas globalistas e internacionalistas. Un triunfo del Perú en la APEC consolidaría nuestra economía como un interlocutor clave en el Foro Asia Pacífico.</p>

      <h2>Impacto en la región</h2>
      <p>De Sudamérica, únicamente Perú y Chile forman parte de las 21 economías de APEC. El boicot podría beneficiar a otros países que buscan protagonismo en la región, como Colombia, que viene luchando por ingresar a este importante foro económico.</p>

      <h2>La estrategia leninista</h2>
      <p>No hay racionalidad en los estrategas del boicot. Se trata de la misma estrategia leninista que sostiene que "salvo el poder todo es ilusión" y que para alcanzarlo no importa la Constitución, el Estado nacional, los pobres de una sociedad ni un proyecto de peruanidad.</p>
    `,
    date: "2024-11-13",
    author: "Denis Jesus Palma Abanto",
    readTime: "6 min read",
    category: "Política Nacional"
  },
  {
    id: 3,
    title: "Ganó la cordura: El regreso de Trump a la Casa Blanca",
    description: "Un análisis del triunfo republicano y el rechazo al wokismo en las elecciones presidenciales de 2024.",
    slug: "gano-la-cordura-trump",
    image: "/images/blog-images/denis-jesus-palma-abanto-trump-wins.jpg",
    content: `
      <div class="w-full aspect-video relative mb-8">
        <img src="/images/blog-images/denis-jesus-palma-abanto-trump-wins.jpg" alt="Trump regresa a la Casa Blanca" class="object-cover w-full" />
      </div>

      <p>Donald Trump no solo recuperó la presidencia sino que llevó al Partido Republicano a la victoria en el Senado y la Cámara Baja. Su regreso marca un hito histórico como el mayor retorno político en la historia de Estados Unidos.</p>

      <h2>Un mensaje que resonó</h2>
      <p>Trump se enfocó en valores fundamentales: la defensa de la Constitución, la libertad de expresión y religión, y el derecho a portar armas. Prometió eliminar la financiación a escuelas que promuevan ideologías radicales y restaurar la paz en Europa y Medio Oriente.</p>

      <h2>El fracaso de la narrativa demócrata</h2>
      <p>El equipo de Kamala Harris reconoció tardíamente que la narrativa de comparar a Trump con fascistas fue un error. La campaña demócrata se centró en atacar a Trump y sus simpatizantes, olvidando presentar propuestas reales.</p>

      <h2>Un nuevo comienzo</h2>
      <p>Esta victoria representa no solo un cambio en la política estadounidense, sino también un golpe al progresismo global. Estados Unidos vuelve a ser un faro de esperanza para quienes creen en la libertad, la justicia y el sentido común.</p>
    `,
    date: "2024-11-12",
    author: "Denis Jesus Palma Abanto",
    readTime: "6 min read",
    category: "Política"
  },
  {
    id: 4,
    title: "Estados Unidos reacciona y rechaza el wokismo",
    description: "Make America Great Again se impone en las elecciones norteamericanas de 2024.",
    slug: "eeuu-rechaza-wokismo",
    image: "/images/blog-images/denis-jesus-palma-abanto-trump-maga.jpg",
    content: `
      <div class="w-full aspect-video relative mb-8">
        <img src="/images/blog-images/denis-jesus-palma-abanto-trump-maga.jpg" alt="Rechazo al wokismo" class="object-cover w-full" />
      </div>

      <p>El triunfo de Trump tiene varias explicaciones, pero quizás la más relevante se vincule al rechazo de la mayoría de la sociedad al progresismo, el también llamado "wokismo".</p>

      <h2>El progresismo en las universidades</h2>
      <p>Las universidades estadounidenses se han convertido en el centro de una movilización cultural e ideológica en contra de los valores tradicionales. El progresismo lanzó una ofensiva sin precedentes en torno a temas como el aborto y la ideología de género.</p>

      <h2>Cuestionamiento a las instituciones</h2>
      <p>El Estado nacional, la democracia representativa, la familia nuclear y el capitalismo son cuestionados por un wokismo que atribuye los males sociales a la hegemonía del hombre blanco y la sociedad patriarcal.</p>

      <h2>La respuesta del pueblo americano</h2>
      <p>El voto a favor de Trump expresa la voluntad de los estadounidenses de recuperar la grandeza de su país y construir un nuevo orden mundial en política, comercio y relaciones entre los estados.</p>
    `,
    date: "2024-11-11",
    author: "Denis Jesus Palma Abanto",
    readTime: "7 min read",
    category: "Política"
  },
  {
    id: 5,
    title: "Por qué Perú debería implementar el plan Bukele",
    description: "Un análisis sobre la aplicación del modelo de seguridad salvadoreño en el contexto peruano.",
    slug: "peru-plan-bukele",
    image: "/images/blog-images/denis-jesus-palma-abanto-bukele.jpg",
    content: `
      <div class="w-full aspect-video relative mb-8">
        <img src="/images/blog-images/denis-jesus-palma-abanto-bukele.jpg" alt="Plan Bukele en Perú" class="object-cover w-full" />
      </div>

      <p>La inseguridad ciudadana es una de las mayores preocupaciones en América Latina, y Perú no es la excepción. Las políticas de seguridad implementadas por Nayib Bukele en El Salvador han captado la atención como posible solución.</p>

      <h2>Los tres pilares del plan</h2>
      <p>El enfoque de Bukele tiene tres componentes clave: la militarización de las zonas más afectadas, el estado de excepción y la construcción de megacárceles. Estos elementos, aplicados correctamente en el contexto peruano, podrían proporcionar resultados efectivos.</p>

      <h2>Aplicación en el contexto peruano</h2>
      <p>La delincuencia organizada en ciudades como Trujillo, Lima y Callao exige una respuesta contundente. La militarización de áreas críticas permitiría retomar el control de territorios donde la policía local no ha sido suficiente.</p>

      <h2>Reforma integral</h2>
      <p>Las políticas de mano dura deben complementarse con una revisión profunda del sistema de justicia y programas que aborden las causas estructurales de la criminalidad, como la pobreza y la falta de oportunidades.</p>
    `,
    date: "2024-11-1",
    author: "Denis Jesus Palma Abanto",
    readTime: "5 min read",
    category: "Política"
  }
]

export function getBlogPosts(): BlogPost[] {
  return blogPosts
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}
