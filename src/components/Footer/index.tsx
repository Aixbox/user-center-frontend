import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'gitee',
          title: 'gitee',
          href: 'https://gitee.com/Aixbox',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined />Aixbox</>,
          href: 'https://github.com/Aixbox',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
