import { App } from "vue";
import { getRandomNumber } from "@hbisedm/shared";

// 插件选项的类型
interface Options {
  // 文本高亮选项
  highlight?: {
    // 默认背景色
    backgroundColor: string;
  };
}

export const plugin = {
  install: (app: App, options?: Options) => {
    app.config.globalProperties.$getRanNum = getRandomNumber;
  },
};
