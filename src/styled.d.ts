// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      [key: string]: string;
    };
    duration: string;
    timingFunction: string;
    breakpoint: string;
  }
}
