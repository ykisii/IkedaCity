import { assertEquals, assertNotEquals } from "https://deno.land/std/testing/asserts.ts";
import { IKedaCity } from "./ikeda_city.ts";

Deno.test (
  "getPopulation",
  function(): void {
    new IKedaCity().getPopulation().then((val) => {
      assertEquals(0, val);
    }) 
  }
);

Deno.test (
  "getTownNames",
  function(): void {
    assertEquals("", (new IKedaCity().getTownNames())[0]);
  }
);

Deno.test (
  "getPopulationByTownNames",
  function(): void {
    assertEquals("", new IKedaCity().getPopulationByTownName(""));
  }
);

Deno.test (
  "getBudget",
  function(): void {
    assertEquals(0, (new IKedaCity().getBudget(2001)));
  }
);