import swaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Job Portal API for Aureus Assignment",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["src/*.ts", "models/*.ts", "swagger/*.ts"],
  };

export const specs = swaggerJsdoc(options);
