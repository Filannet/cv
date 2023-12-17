import { createServer } from "miragejs";
import {skillItems, timeLineData} from "../mocks";

export function makeServer() {
  createServer({
    routes() {
      this.namespace = "api"
      this.timing = 1000
      this.get("/educations", () => timeLineData)
      this.get("/skills", () => skillItems)
    },
  })
}

export default makeServer;
