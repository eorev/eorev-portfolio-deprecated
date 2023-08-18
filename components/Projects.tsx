import Project from "./project";
import React, { forwardRef, Ref } from "react";
import { StaticImageData } from "next/image";

type ProjectProps = {
  id?: string;
  title?: string;
  description?: string;
  link?: string | StaticImageData;
};

const Projects = forwardRef<HTMLDivElement, ProjectProps>((props, ref) => {
  return (
    <>
      <div
        ref={ref}
        className="flex flex-col items-center justify-center mt-0 mb-28 mx-auto w-full max-w-screen-xl h-full py-20 space-y-28 p-24"
      >
        <h1 className=" text-6xl font-black text-slate-100 md:text-8xl">
          Projects
        </h1>
        <Project
          title="OpenWaves"
          description="This project is currently a work in progress but the most stoked I have been about a project in a while.  OpenWaves is going to be a website built for surfers worldwide.  OpenWaves will use current surfcams and a AI model to detect how crowded surfbreaks are at that moment.  "
          link="https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        />
        <Project
          title="NyteAIO"
          description="Helping build the frontend for one the largest Sneaker-Bots was a invaluable experience for me.  This tought me about the beauty and elegance in building a frontend as well as seamless interactions."
          link="/Nyte.jpg"
        />
        <Project
          title="Project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisl id libero molestie ultricies. Sed vitae nisl eget nisl aliquam ultricies. Sed vitae nisl eget nisl aliquam ultricies."
          link="https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        />
        <Project
          title="Project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisl id libero molestie ultricies. Sed vitae nisl eget nisl aliquam ultricies. Sed vitae nisl eget nisl aliquam ultricies."
          link="https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        />
      </div>
    </>
  );
});

Projects.displayName = "Projects";

export default Projects;
