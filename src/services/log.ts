import { svcNative } from './native';

class Log {
  private file = './.log';

  cls = () => {
    const { fs } = svcNative;
    const { writeFileSync } = fs;

    writeFileSync(this.file, '');
  };

  log = (o: any) => {
    const { fs } = svcNative;
    const { appendFileSync } = fs;

    const time = new Date().toString().split(' ')[4];
    const txt = JSON.stringify(o, null, '\t');
    appendFileSync(this.file, `[${time}]\n\n${txt}\n\n`);
  };
}

export const svcLog = new Log();
