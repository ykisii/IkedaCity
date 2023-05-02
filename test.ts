import { assertEquals, assertNotEquals } from "https://deno.land/std/testing/asserts.ts";
import { IKedaCity } from "./ikeda_city.ts";

Deno.test (
  "getPopulation",
  function(): void {
    assertEquals(103064, new IKedaCity().getPopulation());
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