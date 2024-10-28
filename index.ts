
class Log {
    private PID = 151024
    private PACKAGE_NAME = "[@kkmb/capris]";

    public info(...message: any[]): void {
        console.info("\n"  +this.formatDateNow(), this.colorizeText(" INFO ").green, "   " ,this.colorizeText(this.PID).default_color, "  ----  " ,this.PACKAGE_NAME, ...message);
    }

    public error(...message: any[]): void {
        console.error("\n"  +this.formatDateNow(), this.colorizeText(" ERROR ").red, "  ",  this.colorizeText(this.PID).default_color, "  ----  " ,this.PACKAGE_NAME, ...message);
    }

    public debug(...message: any[]): void {
        console.debug("\n"  +this.formatDateNow(), this.colorizeText(" DEBUG ").blue,"  ",  this.colorizeText(this.PID).default_color, "  ----  " ,this.PACKAGE_NAME, ...message);
    }

    public warn(...message: any[]): void {
        console.warn("\n"  +this.formatDateNow(), this.colorizeText(" WARNING ").yellow,"", this.colorizeText(this.PID).default_color, "  ----  " ,this.PACKAGE_NAME, ...message);
    }

    public trace(...message: any[]): void {
        console.trace("\n"  +this.formatDateNow(), this.colorizeText(" TRACE ").cyan,"  ",  this.colorizeText(this.PID).default_color, "  ----  ", this.PACKAGE_NAME, ...message);
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

module.exports.Log = Log;



