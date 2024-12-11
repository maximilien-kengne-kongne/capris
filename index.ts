// Check if the code is running in a Node.js environment
const isNode = typeof process !== "undefined" && process.versions != null && process.versions.node != null;

class Logger {
    // Tracking message counts for different log levels
    private messageCount = {
        total: 0,
        info: 0,
        error: 0,
        debug: 0,
        warn: 0,
        trace: 0,
    };

    // Configurable prefix and suffix for log messages
    private prefix: string = "";
    private suffix: string = "";

    // Option to show date in log messages
    private showDate: boolean = true;

    // Color definitions for different environments (Node.js vs Browser)
    private colors: Record = {
        red: isNode ? "\x1b[31m" : "color: red;",
        green: isNode ? "\x1b[32m" : "color: green;",
        yellow: isNode ? "\x1b[33m" : "color: goldenrod;",
        blue: isNode ? "\x1b[34m" : "color: blue;",
        cyan: isNode ? "\x1b[36m" : "color: cyan;",
        default_color: isNode ? "\x1b[0m" : "color: black;",
    };

    // Method to configure logger settings
    public configure(config: { prefix?: string; suffix?: string; showDate?: boolean; colors?: Record }): void {
        // Update logger settings if provided
        if (config.prefix !== undefined) this.prefix = config.prefix;
        if (config.suffix !== undefined) this.suffix = config.suffix;
        if (config.showDate !== undefined) this.showDate = config.showDate;
        if (config.colors !== undefined) this.colors = { ...this.colors, ...config.colors };
    }

    // Logging methods for different log levels
    public info(...message: any[]): void {
        this.log("INFO", "green", ...message);
        this.messageCount.info++;
    }

    public error(...message: any[]): void {
        this.log("ERROR", "red", ...message);
        this.messageCount.error++;
    }

    public debug(...message: any[]): void {
        this.log("DEBUG", "blue", ...message);
        this.messageCount.debug++;
    }

    public warn(...message: any[]): void {
        this.log("WARNING", "yellow", ...message);
        this.messageCount.warn++;
    }

    public trace(...message: any[]): void {
        this.log("TRACE", "cyan", ...message);
        this.messageCount.trace++;
    }

    // Method to retrieve message counts
    public getMessageCounts(): Record {
        return { ...this.messageCount };
    }

    // Central logging method
    private log(level: string, color: string, ...message: any[]): void {
        // Process the message, add formatting, and log
        const processedMessage = this.formatMessage(message.join(" "));
        const datePart = this.showDate ? `${this.formatDateNow()} ` : "";
        const formattedMessage = `${datePart}[${level}] ${this.prefix} ${processedMessage} ${this.suffix}`;

        // Log differently based on environment
        if (isNode) {
            console.log(this.colorizeText(formattedMessage, color));
        } else {
            console.log(`%c${formattedMessage}`, this.colors[color]);
        }

        // Increment total message count
        this.messageCount.total++;
    }

    // Format message with dynamic placeholders
    private formatMessage(message: string): string {
        const lineNumber = this.getCallerLineNumber();
        return message
            .replace(/:length/g, message.length.toString())
            .replace(/:line/g, lineNumber ? lineNumber.toString() : "unknown");
    }

    // Attempt to get the line number of the caller (Node.js only)
    private getCallerLineNumber(): number | null {
        if (isNode) {
            const stack = new Error().stack?.split("\n");
            if (stack && stack.length > 3) {
                const callerLine = stack[3]; // Line where the log was called
                const match = callerLine.match(/:(\d+):\d+/); // Extract line number
                return match ? parseInt(match[1], 10) : null;
            }
        }
        return null;
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

// Export the Logger class
module.exports.Logger = Logger;
