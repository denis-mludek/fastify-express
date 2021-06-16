import { Application } from "express";
import { FastifyPluginCallback } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    /**
     * Express middleware function
     */
    use: Application["use"];

    /**
     * Express application instance
     */
    express: Application;
  }
}

type PluginOptions = {
  requestKeysToCopy: string[];
  replyKeysToCopy: string[];
};

export const fastifyExpress: FastifyPluginCallback<PluginOptions>;

export default fastifyExpress;
