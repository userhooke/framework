import { Singleton } from '@exteranto/core'

@Singleton
export class VersionResolver {

  /**
   * Checks if the version numbers are equal.
   *
   * @param version First version to compare
   * @param comparison Second version to compare
   * @return Whether the check passed
   */
  public equal (version: string, comparison: string) : boolean {
    return this.integerify(version) === this.integerify(comparison)
  }

  /**
   * Checks if the version is higher than the provided comparison.
   *
   * @param version First version to compare
   * @param comparison Second version to compare
   * @return Whether the check passed
   */
  public higher (version: string, comparison: string) : boolean {
    return this.integerify(version) > this.integerify(comparison)
  }

  /**
   * Checks if the version is lower than the provided comparison.
   *
   * @param version First version to compare
   * @param comparison Second version to compare
   * @return Whether the check passed
   */
  public lower (version: string, comparison: string) : boolean {
    return this.integerify(version) < this.integerify(comparison)
  }

  /**
   * Integerify the provided version string.
   *
   * @param version The version to be transformed
   * @return The resulting version number
   */
  private integerify (version: string) : number {
    return version.split('.').reduce((carry, fragment, index) => {
      return carry += parseInt(fragment, 10) * Math.pow(10, 4 - index * 2)
    }, 0)
  }

}
