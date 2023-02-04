export function extractURLs(text: string): string[] {
    const URLs: string[] = [];
    text.replaceAll("\n", " ").split(" ").forEach((text) => {
        try {
            new URL(text);
            URLs.push(text);
        } catch (_) {
            return false;
        }
    })
    return URLs;
}
