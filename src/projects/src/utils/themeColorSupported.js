import { browserName } from "react-device-detect"

export const isThemeColorSupported = () => {
  return ["Safari", "Samsung Browser"].indexOf(browserName) !== -1
}
