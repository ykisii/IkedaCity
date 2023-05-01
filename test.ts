import { assertEquals, assertNotEquals } from "https://deno.land/std/testing/asserts.ts";
import { IKedaCity } from "./ikeda_city.ts";

Deno.test (
  "getPopulation",
  function(): void {
    assertEquals(103064, new IKedaCity().getPopulation());
  }
);