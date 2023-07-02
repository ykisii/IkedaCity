export class IKedaCity {

  public getPopulation(): Promise<number> {
    return new Promise(resolve => {
      resolve(0);
    });
  }

  public getTownNames(): string[] {
    return [];
  }

  public getPopulationByTownName(name: string): number {
    return 0;
  }
}