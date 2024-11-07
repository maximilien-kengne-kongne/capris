
const DASH_DASH = "  ----  ";
const PID = 151024;
const PACKAGE_NAME = "[@kkmb/logger]";

class Logger {

    public info(...message: any[]): void {
        console.info("\n"  +this.formatDateNow(), this.colorizeText(" INFO ").green, "   " ,this.colorizeText(PID).default_color,PACKAGE_NAME, DASH_DASH, ...message);
    }

    public error(...message: any[]): void {
        console.error("\n"  +this.formatDateNow(), this.colorizeText(" ERROR ").red, "  ",  this.colorizeText(PID).default_color,PACKAGE_NAME, DASH_DASH, ...message);
    }

    public debug(...message: any[]): void {
        console.debug("\n"  +this.formatDateNow(), this.colorizeText(" DEBUG ").blue,"  ",  this.colorizeText(PID).default_color,PACKAGE_NAME, DASH_DASH, ...message);
    }

    public warn(...message: any[]): void {
        console.warn("\n"  +this.formatDateNow(), this.colorizeText(" WARNING ").yellow,"", this.colorizeText(PID).default_color ,PACKAGE_NAME, DASH_DASH, ...message);
    }

    public trace(...message: any[]): void {
        console.trace("\n"  +this.formatDateNow(), this.colorizeText(" TRACE ").cyan,"  ",  this.colorizeText(PID).default_color, PACKAGE_NAME, DASH_DASH, ...message);
    }

    private colorizeText = (...args: any[]) => ({
        red: `\x1b[31m${args.join(' ')}`,
        green: `\x1b[32m${args.join(' ')}`,
        yellow: `\x1b[33m${args.join(' ')}`,
        blue: `\x1b[34m${args.join(' ')}`,
        cyan: `\x1b[36m${args.join(' ')}`,
        default_color: `\x1b[0m${args.join(' ')}`,
    });

    private formatDateNow(): string {
        return new Date().toLocaleString();
    }

}

module.exports.Logger = Logger;



