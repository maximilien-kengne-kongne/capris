// Check if the code is running in a Node.js environment
const isNode: boolean = typeof process !== "undefined" && process.versions != null && process.versions.node != null;
export { isNode };

export class Logger {

    // Color definitions for different environments (Node.js vs Browser)
    private colors: Record<string, string> = {
        red: isNode ? "\x1b[31m" : "color: red;",
        green: isNode ? "\x1b[32m" : "color: green;",
        yellow: isNode ? "\x1b[33m" : "color: goldenrod;",
        blue: isNode ? "\x1b[34m" : "color: blue;",
        cyan: isNode ? "\x1b[36m" : "color: cyan;",
        default_color: isNode ? "\x1b[0m" : "color: black;",
    };


    // Logging methods for different log levels
    public info(...message: any[]): void {
        this.log(" INFO", "green", ...message);
    }

    public error(...message: any[]): void {
        this.log("ERROR", "red", ...message);
    }

    public debug(...message: any[]): void {
        this.log("DEBUG", "blue", ...message);
    }

    public warn(...message: any[]): void {
        this.log(" WARN", "yellow", ...message);
    }

    public trace(...message: any[]): void {
        this.log("TRACE", "cyan", ...message);

    }


    // Central logging method
    private log(level: string, color: string, ...message: any[]): void {
        // Process the message, add formatting, and log

        const datePart = `${this.formatDateNow()} `;
        const formattedMessage = `${datePart} ${level} 151024 ------ [LOGGER] ${message} --- END ---`;

        // Log differently based on environment
        if (isNode) {
            console.log(this.colorizeText(formattedMessage, color));
        } else {
            console.log(`%c${formattedMessage}`, this.colors[color]);
        }


    }


    // Colorize text based on the environment
    private colorizeText(text: string, color: string): string {
        return isNode ? `${this.colors[color] || this.colors.default_color}${text}\x1b[0m` : text;
    }

    // Format current date
    private formatDateNow(): string {
        return new Date().toLocaleString();
    }
}


