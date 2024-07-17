/**
 * The possible color schemes, corresponding to the light and dark appearances.
 */
enum ColorScheme {
    Light = "light",
    Dark = "dark"
}

// Usage example:
const currentScheme: ColorScheme = ColorScheme.Light;

switch (currentScheme) {
    case ColorScheme.Light:
        console.log("Using light color scheme");
        break;
    case ColorScheme.Dark:
        console.log("Using dark color scheme");
        break;
}
