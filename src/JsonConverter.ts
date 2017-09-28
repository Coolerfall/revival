import { Converter } from "./Converter";
import { ReviResponse } from "./ReviResponse";

/**
 * @author Vincent Cheung (coolingfall@gmail.com)
 */
export class JsonConverter implements Converter {
  convert(value: ReviResponse): any {
    return Object.assign({}, value, { body: JSON.parse(value.body) });
  }
}
