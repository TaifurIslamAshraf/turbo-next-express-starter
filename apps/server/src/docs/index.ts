import path from "path";
import { ISwaggerConfig } from "../app/config/swagger";

export const swaggerConfigs: ISwaggerConfig[] = [
  {
    name: "Users API",
    route: "/api-docs/users",
    yamlFilePath: path.join(__dirname, "swagger-users.yaml"),
  },

  // Add more configurations as needed
];
