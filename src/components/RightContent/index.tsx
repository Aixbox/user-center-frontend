import { QuestionCircleOutlined } from '@ant-design/icons';
import UmiSelectLang from 'umi-select-lang'; // 假设是这样导入的，确保路径和实际情况匹配

import '@umijs/max';
export type SiderTheme = 'light' | 'dark';
export const SelectLang = () => {
  return (
    <UmiSelectLang
      style={{
        padding: 4,
      }}
    />
  );
};
export const Question = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: 26,
      }}
      onClick={() => {
        window.open('https://pro.ant.design/docs/getting-started');
      }}
    >
      <QuestionCircleOutlined />
    </div>
  );
};
