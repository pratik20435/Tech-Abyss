// // import { Badge, Container, SimpleGrid } from "@mantine/core";
// // // import laptop from "../../assets/laptop.png";

// // export default function Home() {
// //   return (
// //     <main className="min-h-screen bg-background text-foreground">
// //       {/* Header */}
// //       <section className="border-b border-border/20 py-16">
// //         <Container size="lg">
// //           <h1 className="text-balance text-4xl font-bold leading-tight md:text-5xl">
// //             Best With Organizations And Teams That Need Complete Web
// //             Applications Built From Scratch Or Enhanced
// //           </h1>
// //         </Container>
// //       </section>

// //       {/* Main Content */}
// //       <section className="py-16">
// //         <Container size="lg">
// //           <SimpleGrid
// //             cols={{ base: 1, md: 2 }}
// //             spacing="xl"
// //             verticalSpacing="xl"
// //           >
// //             {/* Image */}
// //             <div className="flex items-center justify-center">
// //               <div className="relative w-full max-w-md overflow-hidden rounded-lg">
// //                 {/* <img
// //                   src={laptop}
// //                   alt="Person working on laptop at desk"
// //                   width={400}
// //                   height={500}
// //                   className="h-auto w-full object-cover"
// //                 /> */}
// //               </div>
// //             </div>

// //             {/* Content */}
// //             <div className="flex flex-col justify-center space-y-6">
// //               <Badge
// //                 variant="light"
// //                 size="lg"
// //                 className="w-fit bg-muted/50 text-foreground"
// //               >
// //                 Performance Marketing
// //               </Badge>

// //               <div>
// //                 <h2 className="text-balance text-3xl font-bold leading-tight md:text-4xl">
// //                   Growing Businesses Needing Complete Web Applications
// //                 </h2>
// //               </div>

// //               <p className="text-lg leading-relaxed text-muted-foreground">
// //                 You Need A Full-Stack Web Application Built From Frontend To
// //                 Backend. You Need Someone Who Can Build The Entire System—User
// //                 Interfaces, APIs, Databases, And Infrastructure. I Help You
// //                 Build Scalable, Maintainable Applications That Grow With Your
// //                 Business.
// //               </p>
// //             </div>
// //           </SimpleGrid>
// //         </Container>
// //       </section>
// //     </main>
// //   );
// // }
// import { Badge, Container, Divider, Text, Title } from "@mantine/core";

// export default function ServiceSection2() {
//   return (
//     <section className="bg-gradient-to-b from-black to-neutral-900 text-white py-24">
//       <Container size="lg">
//         {/* Heading */}
//         <Title order={1} className="text-center text-4xl md:text-5xl font-semibold">
//           Best With Organizations And Teams That Need Complete
//           <br className="hidden md:block" />
//           Web Applications Built From Scratch Or Enhanced
//         </Title>

//         <Divider my="xl" className="border-neutral-700" />

//         {/* Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mt-12">
//           {/* Image */}
//           <div className="rounded-xl overflow-hidden shadow-2xl">
//             <img
//               src="/laptop.png"
//               alt="Working on laptop"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Text Content */}
//           <div>
//             <Badge
//               radius="sm"
//               size="lg"
//               className="bg-neutral-800 text-neutral-200 mb-6"
//             >
//               Performance Marketing
//             </Badge>

//             <Title order={2} className="text-3xl md:text-4xl mb-6">
//               Growing Businesses Needing Complete Web Applications
//             </Title>

//             <Text size="md" className="text-neutral-300 leading-relaxed">
//               You need a full-stack web application built from frontend to
//               backend. You need someone who can build the entire system—user
//               interfaces, APIs, databases, and infrastructure. I help you build
//               scalable, maintainable applications that grow with your business.
//             </Text>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }
import { Container, Grid, Badge, Title, Text, Divider, Image } from "@mantine/core";

export default function MarketingSection() {
  return (
    <section className="bg-gradient-to-b from-black via-zinc-950 to-black text-white py-20">
      <Container size="lg">
        {/* Top heading */}
        <Title
          order={1}
          className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
        >
          Best With Organizations And Teams That Need Complete
          <br className="hidden sm:block" />
          Web Applications Built From Scratch Or Enhanced
        </Title>

        <Divider my="xl" className="opacity-30" />

        {/* Content */}
        <Grid align="center" gutter="xl">
          {/* Image */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/laptop.png"
                alt="Developer working on laptop"
                radius="xs"
                className="w-full h-10px object-cover"
              />
            </div>
          </Grid.Col>

          {/* Text content */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <div className="space-y-5">
              <Badge
                radius="sm"
                variant="light"
                color="gray"
                className="bg-white/10 text-white"
              >
                Performance Marketing
              </Badge>

              <Title order={2} className="text-2xl md:text-3xl font-semibold">
                Growing Businesses Needing Complete Web Applications
              </Title>

              <Text className="text-zinc-300 leading-relaxed">
                You need a full‑stack web application built from frontend to
                backend. You need someone who can build the entire system—user
                interfaces, APIs, databases, and infrastructure. I help you
                build scalable, maintainable applications that grow with your
                business.
              </Text>
            </div>
          </Grid.Col>
        </Grid>
            <Grid align="center" gutter="xl">
          {/* Image */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/laptop2.png"
                alt="Developer working on laptop"
                radius="xs"
                className="w-full h-full object-cover"
              />
            </div>
          </Grid.Col>

          {/* Text content */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <div className="space-y-5">
              <Badge
                radius="sm"
                variant="light"
                color="gray"
                className="bg-white/10 text-white"
              >
                Performance Marketing
              </Badge>

              <Title order={2} className="text-2xl md:text-3xl font-semibold">
                Growing Businesses Needing Complete Web Applications
              </Title>

              <Text className="text-zinc-300 leading-relaxed">
                You need a full‑stack web application built from frontend to
                backend. You need someone who can build the entire system—user
                interfaces, APIs, databases, and infrastructure. I help you
                build scalable, maintainable applications that grow with your
                business.
              </Text>
            </div>
          </Grid.Col>
        </Grid>
            <Grid align="center" gutter="xl">
          {/* Image */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/laptop3.png"
                alt="Developer working on laptop"
                radius="2px"
                className="w-451px h-364px  object-cover"
              />
            </div>
          </Grid.Col>

          {/* Text content */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <div className="space-y-5">
              <Badge
                radius="sm"
                variant="light"
                color="gray"
                className="bg-white/10 text-white"
              >
                Performance Marketing
              </Badge>

              <Title order={2} className="text-2xl md:text-3xl font-semibold">
                Growing Businesses Needing Complete Web Applications
              </Title>

              <Text className="text-zinc-300 leading-relaxed">
                You need a full‑stack web application built from frontend to
                backend. You need someone who can build the entire system—user
                interfaces, APIs, databases, and infrastructure. I help you
                build scalable, maintainable applications that grow with your
                business.
              </Text>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}
