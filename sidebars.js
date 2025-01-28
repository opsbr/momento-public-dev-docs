/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  cacheSidebar: [
    { type: 'autogenerated', dirName: 'cache' }
  ],
  topicsSidebar: [
    { type: 'autogenerated', dirName: 'topics' }
  ],
  leaderboardSidebar: [
    { type: 'autogenerated', dirName: 'leaderboards' }
  ],
  storageSidebar: [
    { type: 'autogenerated', dirName: 'storage' }
  ],
  cloudLinterSidebar: [
    { type: 'autogenerated', dirName: 'cloud-linter' }
  ],
  apiSidebar: [
    {
      type: "doc",
      label: "API reference",
      id: "api/api-reference"
    },
    {
      type: "category",
      label: "Authentication",
      items: [
        {
          type: 'doc',
          id: 'api/authentication/overview'
        },
        {
          type: 'doc',
          id: 'api/authentication/api-keys'
        },
        {
          type: 'doc',
          id: 'api/authentication/tokens'
        },
        {
          type: 'category',
          label: 'Permissions',
          link: {
            type: 'doc',
            id: 'api/authentication/permissions'
          },
          collapsed: false,
          collapsible: false,
          items: [
            {
              type: 'link',
              label: 'Scope',
              href: '/api/authentication/permissions#scope'
            },
            {
              type: 'link',
              label: 'Cache permission',
              href: '/api/authentication/permissions#cache-permission'
            },
            {
              type: 'link',
              label: 'Topic permission',
              href: '/api/authentication/permissions#topic-permission'
            }
          ]
        }
      ]
    }
  ],
  platformSidebar: [
    {
      type: "link",
      label: "Overview",
      href: "/platform"
    },
    {
      type: "link",
      label: "Available Regions",
      href: "/platform/regions"
    },
    {
      type: "category",
      label: "Clients and SDKs",
      items: [
        {
          type: "autogenerated", dirName: "platform/sdks"
        }
      ]
    },
    {
      type: "category",
      label: "Connectivity",
      items: [
        {
          type: "autogenerated", dirName: "platform/connectivity"
        }
      ]
    },
    {
      type: 'category',
      label: 'Quotas and Limits',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Auth',
          href: '/auth/limits'
        },
        {
          type: 'link',
          label: 'Cache',
          href: '/cache/manage/limits'
        },
        {
          type: 'link',
          label: 'Topics',
          href: '/topics/limits'
        },
        {
          type: 'link',
          label: 'Leaderboards',
          href: '/leaderboards/limits'
        }
      ]
    }
  ],
  mediastorageSidebar: [
    { type: 'autogenerated', dirName: 'media-storage' }
  ],
};

module.exports = sidebars;
