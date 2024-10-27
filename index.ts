
class Log {
    private PID = this.generateNDigitNumber();
    private PACKAGE_NAME = "[ @kkmb/capris ]";
    private DATE_NOW_FORMAT = this.formatDateNow();

    public info(...message: any[]): void {
        console.info("\n"  +this.DATE_NOW_FORMAT, this.colorizeText(" INFO ").green, "   " ,this.colorizeText(this.PID).default_color, "  ----  " ,this.PACKAGE_NAME, ...message);
    }

    public error(...message: any[]): void {
        console.error("\n"  +this.DATE_NOW_FORMAT, this.colorizeText(" ERROR ").red, "  ",  this.colorizeText(this.PID).default_color, "  ----  " ,this.PACKAGE_NAME, ...message);
    }

    public debug(...message: any[]): void {
        console.debug("\n"  +this.DATE_NOW_FORMAT, this.colorizeText(" DEBUG ").blue,"  ",  this.colorizeText(this.PID).default_color, "  ----  " ,this.PACKAGE_NAME, ...message);
    }

    public warn(...message: any[]): void {
        console.warn("\n"  +this.formatDateNow(), this.colorizeText(" WARNING ").yellow,"", this.colorizeText(this.PID).default_color, "  ----  " ,this.PACKAGE_NAME, ...message);
    }

    public trace(...message: any[]): void {
        console.trace("\n"  +this.DATE_NOW_FORMAT, this.colorizeText(" TRACE ").cyan,"  ",  this.colorizeText(this.PID).default_color, "  ----  ", this.PACKAGE_NAME, ...message);
    }

    private generateNDigitNumber(n: number = 6): number {

        let digit: number;

        do {
            digit = Math.random()

        }while (digit === 1);

        const min = Math.pow(10, n - 1); // Minimum n
        const max = Math.pow(10, n) - 1; // Maximum n
        return Math.floor( digit * (max - min + 1)) + min;
    }

    private colorizeText = (...args: any[]) => ({
        black: `\x1b[30m${args.join(' ')}`,
        red: `\x1b[31m${args.join(' ')}`,
        green: `\x1b[32m${args.join(' ')}`,
        yellow: `\x1b[33m${args.join(' ')}`,
        blue: `\x1b[34m${args.join(' ')}`,
        magenta: `\x1b[35m${args.join(' ')}`,
        cyan: `\x1b[36m${args.join(' ')}`,
        white: `\x1b[37m${args.join(' ')}`,
        default_color: `\x1b[0m${args.join(' ')}`,
    });

    private formatDateNow(): string {
        return new Date().toLocaleString();
    }

}

module.exports.Log = Log;



