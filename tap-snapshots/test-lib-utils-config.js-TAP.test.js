/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/lib/utils/config.js TAP no process.umask() method > must match snapshot 1`] = `
Object {
  "defaults": Object {
    "access": null,
    "all": false,
    "allow-same-version": false,
    "also": null,
    "always-auth": false,
    "audit": true,
    "audit-level": null,
    "auth-type": "legacy",
    "before": null,
    "bin-links": true,
    "browser": null,
    "ca": null,
    "cache": "{CACHE DIR} npm-cache",
    "cache-lock-retries": 10,
    "cache-lock-stale": 60000,
    "cache-lock-wait": 10000,
    "cache-max": null,
    "cache-min": 10,
    "cafile": null,
    "call": "",
    "cert": null,
    "cidr": null,
    "color": true,
    "commit-hooks": true,
    "depth": null,
    "description": true,
    "dev": false,
    "dry-run": false,
    "editor": "vim",
    "engine-strict": false,
    "fetch-retries": 2,
    "fetch-retry-factor": 10,
    "fetch-retry-maxtimeout": 60000,
    "fetch-retry-mintimeout": 10000,
    "force": false,
    "format-package-lock": true,
    "fund": true,
    "git": "git",
    "git-tag-version": true,
    "global": false,
    "global-style": false,
    "heading": "npm",
    "https-proxy": null,
    "if-present": false,
    "ignore-prepublish": false,
    "ignore-scripts": false,
    "include": Array [],
    "include-staged": false,
    "init-author-email": "",
    "init-author-name": "",
    "init-author-url": "",
    "init-license": "ISC",
    "init-module": "~/.npm-init.js",
    "init-version": "1.0.0",
    "json": false,
    "key": null,
    "legacy-bundling": false,
    "legacy-peer-deps": false,
    "link": false,
    "local-address": undefined,
    "loglevel": "notice",
    "logs-max": 10,
    "long": false,
    "maxsockets": 50,
    "message": "%s",
    "metrics-registry": null,
    "node-options": null,
    "node-version": "v14.8.0",
    "noproxy": null,
    "offline": false,
    "omit": Array [],
    "only": null,
    "optional": true,
    "otp": null,
    "package": Array [],
    "package-lock": true,
    "package-lock-only": false,
    "parseable": false,
    "prefer-offline": false,
    "prefer-online": false,
    "preid": "",
    "production": false,
    "progress": true,
    "proxy": null,
    "read-only": false,
    "rebuild-bundle": true,
    "registry": "https://registry.npmjs.org/",
    "rollback": true,
    "save": true,
    "save-bundle": false,
    "save-dev": false,
    "save-exact": false,
    "save-optional": false,
    "save-prefix": "^",
    "save-prod": false,
    "scope": "",
    "script-shell": null,
    "scripts-prepend-node-path": "warn-only",
    "searchexclude": null,
    "searchlimit": 20,
    "searchopts": "",
    "searchstaleness": 900,
    "send-metrics": false,
    "shell": "cmd.exe",
    "shrinkwrap": true,
    "sign-git-commit": false,
    "sign-git-tag": false,
    "sso-poll-frequency": 500,
    "sso-type": "oauth",
    "strict-peer-deps": false,
    "strict-ssl": true,
    "tag": "latest",
    "tag-version-prefix": "v",
    "timing": false,
    "tmp": "/tmp",
    "umask": 18,
    "unicode": true,
    "update-notifier": true,
    "usage": false,
    "user-agent": "npm/{npm-version} node/{node-version} {platform} {arch} {ci}",
    "userconfig": "~/.npmrc",
    "version": false,
    "versions": false,
    "viewer": "browser",
  },
  "shorthands": Object {
    "?": Array [
      "--usage",
    ],
    "a": Array [
      "--all",
    ],
    "B": Array [
      "--save-bundle",
    ],
    "c": Array [
      "--call",
    ],
    "C": Array [
      "--prefix",
    ],
    "d": Array [
      "--loglevel",
      "info",
    ],
    "D": Array [
      "--save-dev",
    ],
    "dd": Array [
      "--loglevel",
      "verbose",
    ],
    "ddd": Array [
      "--loglevel",
      "silly",
    ],
    "desc": Array [
      "--description",
    ],
    "E": Array [
      "--save-exact",
    ],
    "enjoy-by": Array [
      "--before",
    ],
    "f": Array [
      "--force",
    ],
    "g": Array [
      "--global",
    ],
    "h": Array [
      "--usage",
    ],
    "H": Array [
      "--usage",
    ],
    "help": Array [
      "--usage",
    ],
    "l": Array [
      "--long",
    ],
    "local": Array [
      "--no-global",
    ],
    "m": Array [
      "--message",
    ],
    "n": Array [
      "--no-yes",
    ],
    "N": Array [
      "--no-registry",
    ],
    "no-desc": Array [
      "--no-description",
    ],
    "no-reg": Array [
      "--no-registry",
    ],
    "noreg": Array [
      "--no-registry",
    ],
    "O": Array [
      "--save-optional",
    ],
    "p": Array [
      "--parseable",
    ],
    "P": Array [
      "--save-prod",
    ],
    "porcelain": Array [
      "--parseable",
    ],
    "q": Array [
      "--loglevel",
      "warn",
    ],
    "quiet": Array [
      "--loglevel",
      "warn",
    ],
    "readonly": Array [
      "--read-only",
    ],
    "reg": Array [
      "--registry",
    ],
    "s": Array [
      "--loglevel",
      "silent",
    ],
    "S": Array [
      "--save",
    ],
    "silent": Array [
      "--loglevel",
      "silent",
    ],
    "v": Array [
      "--version",
    ],
    "verbose": Array [
      "--loglevel",
      "verbose",
    ],
    "y": Array [
      "--yes",
    ],
  },
  "types": Object {
    "access": Array [
      null,
      "restricted",
      "public",
    ],
    "all": "{Boolean TYPE}",
    "allow-same-version": "{Boolean TYPE}",
    "also": Array [
      null,
      "dev",
      "development",
    ],
    "always-auth": "{Boolean TYPE}",
    "audit": "{Boolean TYPE}",
    "audit-level": Array [
      "low",
      "moderate",
      "high",
      "critical",
      "none",
      null,
    ],
    "auth-type": Array [
      "legacy",
      "sso",
      "saml",
      "oauth",
    ],
    "before": Array [
      null,
      "{Date TYPE}",
    ],
    "bin-links": "{Boolean TYPE}",
    "browser": Array [
      null,
      "{Boolean TYPE}",
      "{String TYPE}",
    ],
    "ca": Array [
      null,
      "{String TYPE}",
      "{Array TYPE}",
    ],
    "cache": "{PATH MODULE}",
    "cache-lock-retries": "{Number TYPE}",
    "cache-lock-stale": "{Number TYPE}",
    "cache-lock-wait": "{Number TYPE}",
    "cache-max": "{Number TYPE}",
    "cache-min": "{Number TYPE}",
    "cafile": "{PATH MODULE}",
    "call": "{String TYPE}",
    "cert": Array [
      null,
      "{String TYPE}",
    ],
    "cidr": Array [
      null,
      "{String TYPE}",
      "{Array TYPE}",
    ],
    "color": Array [
      "always",
      "{Boolean TYPE}",
    ],
    "commit-hooks": "{Boolean TYPE}",
    "depth": Array [
      null,
      "{Number TYPE}",
    ],
    "description": "{Boolean TYPE}",
    "dev": "{Boolean TYPE}",
    "dry-run": "{Boolean TYPE}",
    "editor": "{String TYPE}",
    "engine-strict": "{Boolean TYPE}",
    "fetch-retries": "{Number TYPE}",
    "fetch-retry-factor": "{Number TYPE}",
    "fetch-retry-maxtimeout": "{Number TYPE}",
    "fetch-retry-mintimeout": "{Number TYPE}",
    "force": "{Boolean TYPE}",
    "format-package-lock": "{Boolean TYPE}",
    "fund": "{Boolean TYPE}",
    "git": "{String TYPE}",
    "git-tag-version": "{Boolean TYPE}",
    "global": "{Boolean TYPE}",
    "global-style": "{Boolean TYPE}",
    "globalconfig": "{PATH MODULE}",
    "group": Array [
      "{Number TYPE}",
      "{String TYPE}",
    ],
    "heading": "{String TYPE}",
    "https-proxy": Array [
      null,
      "{URL MODULE}",
    ],
    "if-present": "{Boolean TYPE}",
    "ignore-prepublish": "{Boolean TYPE}",
    "ignore-scripts": "{Boolean TYPE}",
    "include": Array [
      "{Array TYPE}",
      "prod",
      "dev",
      "optional",
      "peer",
    ],
    "include-staged": "{Boolean TYPE}",
    "init-author-email": "{String TYPE}",
    "init-author-name": "{String TYPE}",
    "init-author-url": Array [
      "",
      "{URL MODULE}",
    ],
    "init-license": "{String TYPE}",
    "init-module": "{PATH MODULE}",
    "init-version": "{SEMVER MODULE}",
    "json": "{Boolean TYPE}",
    "key": Array [
      null,
      "{String TYPE}",
    ],
    "legacy-bundling": "{Boolean TYPE}",
    "legacy-peer-deps": "{Boolean TYPE}",
    "link": "{Boolean TYPE}",
    "local-address": Array [
      undefined,
    ],
    "loglevel": Array [
      "silent",
      "error",
      "warn",
      "notice",
      "http",
      "timing",
      "info",
      "verbose",
      "silly",
    ],
    "logs-max": "{Number TYPE}",
    "long": "{Boolean TYPE}",
    "maxsockets": "{Number TYPE}",
    "message": "{String TYPE}",
    "metrics-registry": Array [
      null,
      "{String TYPE}",
    ],
    "node-options": Array [
      null,
      "{String TYPE}",
    ],
    "node-version": Array [
      null,
      "{SEMVER MODULE}",
    ],
    "noproxy": Array [
      null,
      "{String TYPE}",
      "{Array TYPE}",
    ],
    "offline": "{Boolean TYPE}",
    "omit": Array [
      "{Array TYPE}",
      "dev",
      "optional",
      "peer",
    ],
    "only": Array [
      null,
      "dev",
      "development",
      "prod",
      "production",
    ],
    "optional": "{Boolean TYPE}",
    "otp": Array [
      null,
      "{String TYPE}",
    ],
    "package": Array [
      "{String TYPE}",
      "{Array TYPE}",
    ],
    "package-lock": "{Boolean TYPE}",
    "package-lock-only": "{Boolean TYPE}",
    "parseable": "{Boolean TYPE}",
    "prefer-offline": "{Boolean TYPE}",
    "prefer-online": "{Boolean TYPE}",
    "prefix": "{PATH MODULE}",
    "preid": "{String TYPE}",
    "production": "{Boolean TYPE}",
    "progress": "{Boolean TYPE}",
    "proxy": Array [
      null,
      false,
      "{URL MODULE}",
    ],
    "read-only": "{Boolean TYPE}",
    "rebuild-bundle": "{Boolean TYPE}",
    "registry": Array [
      null,
      "{URL MODULE}",
    ],
    "rollback": "{Boolean TYPE}",
    "save": "{Boolean TYPE}",
    "save-bundle": "{Boolean TYPE}",
    "save-dev": "{Boolean TYPE}",
    "save-exact": "{Boolean TYPE}",
    "save-optional": "{Boolean TYPE}",
    "save-prefix": "{String TYPE}",
    "save-prod": "{Boolean TYPE}",
    "scope": "{String TYPE}",
    "script-shell": Array [
      null,
      "{String TYPE}",
    ],
    "scripts-prepend-node-path": Array [
      "{Boolean TYPE}",
      "auto",
      "warn-only",
    ],
    "searchexclude": Array [
      null,
      "{String TYPE}",
    ],
    "searchlimit": "{Number TYPE}",
    "searchopts": "{String TYPE}",
    "searchstaleness": "{Number TYPE}",
    "send-metrics": "{Boolean TYPE}",
    "shell": "{String TYPE}",
    "shrinkwrap": "{Boolean TYPE}",
    "sign-git-commit": "{Boolean TYPE}",
    "sign-git-tag": "{Boolean TYPE}",
    "sso-poll-frequency": "{Number TYPE}",
    "sso-type": Array [
      null,
      "oauth",
      "saml",
    ],
    "strict-peer-deps": "{Boolean TYPE}",
    "strict-ssl": "{Boolean TYPE}",
    "tag": "{String TYPE}",
    "tag-version-prefix": "{String TYPE}",
    "timing": "{Boolean TYPE}",
    "tmp": "{PATH MODULE}",
    "umask": "{Umask TYPE}",
    "unicode": "{Boolean TYPE}",
    "update-notifier": "{Boolean TYPE}",
    "usage": "{Boolean TYPE}",
    "user-agent": "{String TYPE}",
    "userconfig": "{PATH MODULE}",
    "version": "{Boolean TYPE}",
    "versions": "{Boolean TYPE}",
    "viewer": "{String TYPE}",
  },
}
`

exports[`test/lib/utils/config.js TAP no working network interfaces, on windows > must match snapshot 1`] = `
Object {
  "defaults": Object {
    "access": null,
    "all": false,
    "allow-same-version": false,
    "also": null,
    "always-auth": false,
    "audit": true,
    "audit-level": null,
    "auth-type": "legacy",
    "before": null,
    "bin-links": true,
    "browser": null,
    "ca": null,
    "cache": "{CACHE DIR} npm-cache",
    "cache-lock-retries": 10,
    "cache-lock-stale": 60000,
    "cache-lock-wait": 10000,
    "cache-max": null,
    "cache-min": 10,
    "cafile": null,
    "call": "",
    "cert": null,
    "cidr": null,
    "color": true,
    "commit-hooks": true,
    "depth": null,
    "description": true,
    "dev": false,
    "dry-run": false,
    "editor": "vim",
    "engine-strict": false,
    "fetch-retries": 2,
    "fetch-retry-factor": 10,
    "fetch-retry-maxtimeout": 60000,
    "fetch-retry-mintimeout": 10000,
    "force": false,
    "format-package-lock": true,
    "fund": true,
    "git": "git",
    "git-tag-version": true,
    "global": false,
    "global-style": false,
    "heading": "npm",
    "https-proxy": null,
    "if-present": false,
    "ignore-prepublish": false,
    "ignore-scripts": false,
    "include": Array [],
    "include-staged": false,
    "init-author-email": "",
    "init-author-name": "",
    "init-author-url": "",
    "init-license": "ISC",
    "init-module": "~/.npm-init.js",
    "init-version": "1.0.0",
    "json": false,
    "key": null,
    "legacy-bundling": false,
    "legacy-peer-deps": false,
    "link": false,
    "local-address": undefined,
    "loglevel": "notice",
    "logs-max": 10,
    "long": false,
    "maxsockets": 50,
    "message": "%s",
    "metrics-registry": null,
    "node-options": null,
    "node-version": "v14.8.0",
    "noproxy": null,
    "offline": false,
    "omit": Array [],
    "only": null,
    "optional": true,
    "otp": null,
    "package": Array [],
    "package-lock": true,
    "package-lock-only": false,
    "parseable": false,
    "prefer-offline": false,
    "prefer-online": false,
    "preid": "",
    "production": false,
    "progress": true,
    "proxy": null,
    "read-only": false,
    "rebuild-bundle": true,
    "registry": "https://registry.npmjs.org/",
    "rollback": true,
    "save": true,
    "save-bundle": false,
    "save-dev": false,
    "save-exact": false,
    "save-optional": false,
    "save-prefix": "^",
    "save-prod": false,
    "scope": "",
    "script-shell": null,
    "scripts-prepend-node-path": "warn-only",
    "searchexclude": null,
    "searchlimit": 20,
    "searchopts": "",
    "searchstaleness": 900,
    "send-metrics": false,
    "shell": "cmd.exe",
    "shrinkwrap": true,
    "sign-git-commit": false,
    "sign-git-tag": false,
    "sso-poll-frequency": 500,
    "sso-type": "oauth",
    "strict-peer-deps": false,
    "strict-ssl": true,
    "tag": "latest",
    "tag-version-prefix": "v",
    "timing": false,
    "tmp": "/tmp",
    "umask": 22,
    "unicode": true,
    "update-notifier": true,
    "usage": false,
    "user-agent": "npm/{npm-version} node/{node-version} {platform} {arch} {ci}",
    "userconfig": "~/.npmrc",
    "version": false,
    "versions": false,
    "viewer": "browser",
  },
  "shorthands": Object {
    "?": Array [
      "--usage",
    ],
    "a": Array [
      "--all",
    ],
    "B": Array [
      "--save-bundle",
    ],
    "c": Array [
      "--call",
    ],
    "C": Array [
      "--prefix",
    ],
    "d": Array [
      "--loglevel",
      "info",
    ],
    "D": Array [
      "--save-dev",
    ],
    "dd": Array [
      "--loglevel",
      "verbose",
    ],
    "ddd": Array [
      "--loglevel",
      "silly",
    ],
    "desc": Array [
      "--description",
    ],
    "E": Array [
      "--save-exact",
    ],
    "enjoy-by": Array [
      "--before",
    ],
    "f": Array [
      "--force",
    ],
    "g": Array [
      "--global",
    ],
    "h": Array [
      "--usage",
    ],
    "H": Array [
      "--usage",
    ],
    "help": Array [
      "--usage",
    ],
    "l": Array [
      "--long",
    ],
    "local": Array [
      "--no-global",
    ],
    "m": Array [
      "--message",
    ],
    "n": Array [
      "--no-yes",
    ],
    "N": Array [
      "--no-registry",
    ],
    "no-desc": Array [
      "--no-description",
    ],
    "no-reg": Array [
      "--no-registry",
    ],
    "noreg": Array [
      "--no-registry",
    ],
    "O": Array [
      "--save-optional",
    ],
    "p": Array [
      "--parseable",
    ],
    "P": Array [
      "--save-prod",
    ],
    "porcelain": Array [
      "--parseable",
    ],
    "q": Array [
      "--loglevel",
      "warn",
    ],
    "quiet": Array [
      "--loglevel",
      "warn",
    ],
    "readonly": Array [
      "--read-only",
    ],
    "reg": Array [
      "--registry",
    ],
    "s": Array [
      "--loglevel",
      "silent",
    ],
    "S": Array [
      "--save",
    ],
    "silent": Array [
      "--loglevel",
      "silent",
    ],
    "v": Array [
      "--version",
    ],
    "verbose": Array [
      "--loglevel",
      "verbose",
    ],
    "y": Array [
      "--yes",
    ],
  },
  "types": Object {
    "access": Array [
      null,
      "restricted",
      "public",
    ],
    "all": "{Boolean TYPE}",
    "allow-same-version": "{Boolean TYPE}",
    "also": Array [
      null,
      "dev",
      "development",
    ],
    "always-auth": "{Boolean TYPE}",
    "audit": "{Boolean TYPE}",
    "audit-level": Array [
      "low",
      "moderate",
      "high",
      "critical",
      "none",
      null,
    ],
    "auth-type": Array [
      "legacy",
      "sso",
      "saml",
      "oauth",
    ],
    "before": Array [
      null,
      "{Date TYPE}",
    ],
    "bin-links": "{Boolean TYPE}",
    "browser": Array [
      null,
      "{Boolean TYPE}",
      "{String TYPE}",
    ],
    "ca": Array [
      null,
      "{String TYPE}",
      "{Array TYPE}",
    ],
    "cache": "{PATH MODULE}",
    "cache-lock-retries": "{Number TYPE}",
    "cache-lock-stale": "{Number TYPE}",
    "cache-lock-wait": "{Number TYPE}",
    "cache-max": "{Number TYPE}",
    "cache-min": "{Number TYPE}",
    "cafile": "{PATH MODULE}",
    "call": "{String TYPE}",
    "cert": Array [
      null,
      "{String TYPE}",
    ],
    "cidr": Array [
      null,
      "{String TYPE}",
      "{Array TYPE}",
    ],
    "color": Array [
      "always",
      "{Boolean TYPE}",
    ],
    "commit-hooks": "{Boolean TYPE}",
    "depth": Array [
      null,
      "{Number TYPE}",
    ],
    "description": "{Boolean TYPE}",
    "dev": "{Boolean TYPE}",
    "dry-run": "{Boolean TYPE}",
    "editor": "{String TYPE}",
    "engine-strict": "{Boolean TYPE}",
    "fetch-retries": "{Number TYPE}",
    "fetch-retry-factor": "{Number TYPE}",
    "fetch-retry-maxtimeout": "{Number TYPE}",
    "fetch-retry-mintimeout": "{Number TYPE}",
    "force": "{Boolean TYPE}",
    "format-package-lock": "{Boolean TYPE}",
    "fund": "{Boolean TYPE}",
    "git": "{String TYPE}",
    "git-tag-version": "{Boolean TYPE}",
    "global": "{Boolean TYPE}",
    "global-style": "{Boolean TYPE}",
    "globalconfig": "{PATH MODULE}",
    "group": Array [
      "{Number TYPE}",
      "{String TYPE}",
    ],
    "heading": "{String TYPE}",
    "https-proxy": Array [
      null,
      "{URL MODULE}",
    ],
    "if-present": "{Boolean TYPE}",
    "ignore-prepublish": "{Boolean TYPE}",
    "ignore-scripts": "{Boolean TYPE}",
    "include": Array [
      "{Array TYPE}",
      "prod",
      "dev",
      "optional",
      "peer",
    ],
    "include-staged": "{Boolean TYPE}",
    "init-author-email": "{String TYPE}",
    "init-author-name": "{String TYPE}",
    "init-author-url": Array [
      "",
      "{URL MODULE}",
    ],
    "init-license": "{String TYPE}",
    "init-module": "{PATH MODULE}",
    "init-version": "{SEMVER MODULE}",
    "json": "{Boolean TYPE}",
    "key": Array [
      null,
      "{String TYPE}",
    ],
    "legacy-bundling": "{Boolean TYPE}",
    "legacy-peer-deps": "{Boolean TYPE}",
    "link": "{Boolean TYPE}",
    "local-address": Array [
      undefined,
    ],
    "loglevel": Array [
      "silent",
      "error",
      "warn",
      "notice",
      "http",
      "timing",
      "info",
      "verbose",
      "silly",
    ],
    "logs-max": "{Number TYPE}",
    "long": "{Boolean TYPE}",
    "maxsockets": "{Number TYPE}",
    "message": "{String TYPE}",
    "metrics-registry": Array [
      null,
      "{String TYPE}",
    ],
    "node-options": Array [
      null,
      "{String TYPE}",
    ],
    "node-version": Array [
      null,
      "{SEMVER MODULE}",
    ],
    "noproxy": Array [
      null,
      "{String TYPE}",
      "{Array TYPE}",
    ],
    "offline": "{Boolean TYPE}",
    "omit": Array [
      "{Array TYPE}",
      "dev",
      "optional",
      "peer",
    ],
    "only": Array [
      null,
      "dev",
      "development",
      "prod",
      "production",
    ],
    "optional": "{Boolean TYPE}",
    "otp": Array [
      null,
      "{String TYPE}",
    ],
    "package": Array [
      "{String TYPE}",
      "{Array TYPE}",
    ],
    "package-lock": "{Boolean TYPE}",
    "package-lock-only": "{Boolean TYPE}",
    "parseable": "{Boolean TYPE}",
    "prefer-offline": "{Boolean TYPE}",
    "prefer-online": "{Boolean TYPE}",
    "prefix": "{PATH MODULE}",
    "preid": "{String TYPE}",
    "production": "{Boolean TYPE}",
    "progress": "{Boolean TYPE}",
    "proxy": Array [
      null,
      false,
      "{URL MODULE}",
    ],
    "read-only": "{Boolean TYPE}",
    "rebuild-bundle": "{Boolean TYPE}",
    "registry": Array [
      null,
      "{URL MODULE}",
    ],
    "rollback": "{Boolean TYPE}",
    "save": "{Boolean TYPE}",
    "save-bundle": "{Boolean TYPE}",
    "save-dev": "{Boolean TYPE}",
    "save-exact": "{Boolean TYPE}",
    "save-optional": "{Boolean TYPE}",
    "save-prefix": "{String TYPE}",
    "save-prod": "{Boolean TYPE}",
    "scope": "{String TYPE}",
    "script-shell": Array [
      null,
      "{String TYPE}",
    ],
    "scripts-prepend-node-path": Array [
      "{Boolean TYPE}",
      "auto",
      "warn-only",
    ],
    "searchexclude": Array [
      null,
      "{String TYPE}",
    ],
    "searchlimit": "{Number TYPE}",
    "searchopts": "{String TYPE}",
    "searchstaleness": "{Number TYPE}",
    "send-metrics": "{Boolean TYPE}",
    "shell": "{String TYPE}",
    "shrinkwrap": "{Boolean TYPE}",
    "sign-git-commit": "{Boolean TYPE}",
    "sign-git-tag": "{Boolean TYPE}",
    "sso-poll-frequency": "{Number TYPE}",
    "sso-type": Array [
      null,
      "oauth",
      "saml",
    ],
    "strict-peer-deps": "{Boolean TYPE}",
    "strict-ssl": "{Boolean TYPE}",
    "tag": "{String TYPE}",
    "tag-version-prefix": "{String TYPE}",
    "timing": "{Boolean TYPE}",
    "tmp": "{PATH MODULE}",
    "umask": "{Umask TYPE}",
    "unicode": "{Boolean TYPE}",
    "update-notifier": "{Boolean TYPE}",
    "usage": "{Boolean TYPE}",
    "user-agent": "{String TYPE}",
    "userconfig": "{PATH MODULE}",
    "version": "{Boolean TYPE}",
    "versions": "{Boolean TYPE}",
    "viewer": "{String TYPE}",
  },
}
`

exports[`test/lib/utils/config.js TAP working network interfaces, not windows > must match snapshot 1`] = `
Object {
  "defaults": Object {
    "access": null,
    "all": false,
    "allow-same-version": false,
    "also": null,
    "always-auth": false,
    "audit": true,
    "audit-level": null,
    "auth-type": "legacy",
    "before": null,
    "bin-links": true,
    "browser": null,
    "ca": null,
    "cache": "{CACHE DIR} .npm",
    "cache-lock-retries": 10,
    "cache-lock-stale": 60000,
    "cache-lock-wait": 10000,
    "cache-max": null,
    "cache-min": 10,
    "cafile": null,
    "call": "",
    "cert": null,
    "cidr": null,
    "color": true,
    "commit-hooks": true,
    "depth": null,
    "description": true,
    "dev": false,
    "dry-run": false,
    "editor": "vim",
    "engine-strict": false,
    "fetch-retries": 2,
    "fetch-retry-factor": 10,
    "fetch-retry-maxtimeout": 60000,
    "fetch-retry-mintimeout": 10000,
    "force": false,
    "format-package-lock": true,
    "fund": true,
    "git": "git",
    "git-tag-version": true,
    "global": false,
    "global-style": false,
    "heading": "npm",
    "https-proxy": null,
    "if-present": false,
    "ignore-prepublish": false,
    "ignore-scripts": false,
    "include": Array [],
    "include-staged": false,
    "init-author-email": "",
    "init-author-name": "",
    "init-author-url": "",
    "init-license": "ISC",
    "init-module": "~/.npm-init.js",
    "init-version": "1.0.0",
    "json": false,
    "key": null,
    "legacy-bundling": false,
    "legacy-peer-deps": false,
    "link": false,
    "local-address": undefined,
    "loglevel": "notice",
    "logs-max": 10,
    "long": false,
    "maxsockets": 50,
    "message": "%s",
    "metrics-registry": null,
    "node-options": null,
    "node-version": "v14.8.0",
    "noproxy": null,
    "offline": false,
    "omit": Array [],
    "only": null,
    "optional": true,
    "otp": null,
    "package": Array [],
    "package-lock": true,
    "package-lock-only": false,
    "parseable": false,
    "prefer-offline": false,
    "prefer-online": false,
    "preid": "",
    "production": false,
    "progress": true,
    "proxy": null,
    "read-only": false,
    "rebuild-bundle": true,
    "registry": "https://registry.npmjs.org/",
    "rollback": true,
    "save": true,
    "save-bundle": false,
    "save-dev": false,
    "save-exact": false,
    "save-optional": false,
    "save-prefix": "^",
    "save-prod": false,
    "scope": "",
    "script-shell": null,
    "scripts-prepend-node-path": "warn-only",
    "searchexclude": null,
    "searchlimit": 20,
    "searchopts": "",
    "searchstaleness": 900,
    "send-metrics": false,
    "shell": "/usr/local/bin/bash",
    "shrinkwrap": true,
    "sign-git-commit": false,
    "sign-git-tag": false,
    "sso-poll-frequency": 500,
    "sso-type": "oauth",
    "strict-peer-deps": false,
    "strict-ssl": true,
    "tag": "latest",
    "tag-version-prefix": "v",
    "timing": false,
    "tmp": "/tmp",
    "umask": 22,
    "unicode": true,
    "update-notifier": true,
    "usage": false,
    "user-agent": "npm/{npm-version} node/{node-version} {platform} {arch} {ci}",
    "userconfig": "~/.npmrc",
    "version": false,
    "versions": false,
    "viewer": "man",
  },
  "shorthands": Object {
    "?": Array [
      "--usage",
    ],
    "a": Array [
      "--all",
    ],
    "B": Array [
      "--save-bundle",
    ],
    "c": Array [
      "--call",
    ],
    "C": Array [
      "--prefix",
    ],
    "d": Array [
      "--loglevel",
      "info",
    ],
    "D": Array [
      "--save-dev",
    ],
    "dd": Array [
      "--loglevel",
      "verbose",
    ],
    "ddd": Array [
      "--loglevel",
      "silly",
    ],
    "desc": Array [
      "--description",
    ],
    "E": Array [
      "--save-exact",
    ],
    "enjoy-by": Array [
      "--before",
    ],
    "f": Array [
      "--force",
    ],
    "g": Array [
      "--global",
    ],
    "h": Array [
      "--usage",
    ],
    "H": Array [
      "--usage",
    ],
    "help": Array [
      "--usage",
    ],
    "l": Array [
      "--long",
    ],
    "local": Array [
      "--no-global",
    ],
    "m": Array [
      "--message",
    ],
    "n": Array [
      "--no-yes",
    ],
    "N": Array [
      "--no-registry",
    ],
    "no-desc": Array [
      "--no-description",
    ],
    "no-reg": Array [
      "--no-registry",
    ],
    "noreg": Array [
      "--no-registry",
    ],
    "O": Array [
      "--save-optional",
    ],
    "p": Array [
      "--parseable",
    ],
    "P": Array [
      "--save-prod",
    ],
    "porcelain": Array [
      "--parseable",
    ],
    "q": Array [
      "--loglevel",
      "warn",
    ],
    "quiet": Array [
      "--loglevel",
      "warn",
    ],
    "readonly": Array [
      "--read-only",
    ],
    "reg": Array [
      "--registry",
    ],
    "s": Array [
      "--loglevel",
      "silent",
    ],
    "S": Array [
      "--save",
    ],
    "silent": Array [
      "--loglevel",
      "silent",
    ],
    "v": Array [
      "--version",
    ],
    "verbose": Array [
      "--loglevel",
      "verbose",
    ],
    "y": Array [
      "--yes",
    ],
  },
  "types": Object {
    "access": Array [
      null,
      "restricted",
      "public",
    ],
    "all": "{Boolean TYPE}",
    "allow-same-version": "{Boolean TYPE}",
    "also": Array [
      null,
      "dev",
      "development",
    ],
    "always-auth": "{Boolean TYPE}",
    "audit": "{Boolean TYPE}",
    "audit-level": Array [
      "low",
      "moderate",
      "high",
      "critical",
      "none",
      null,
    ],
    "auth-type": Array [
      "legacy",
      "sso",
      "saml",
      "oauth",
    ],
    "before": Array [
      null,
      "{Date TYPE}",
    ],
    "bin-links": "{Boolean TYPE}",
    "browser": Array [
      null,
      "{Boolean TYPE}",
      "{String TYPE}",
    ],
    "ca": Array [
      null,
      "{String TYPE}",
      "{Array TYPE}",
    ],
    "cache": "{PATH MODULE}",
    "cache-lock-retries": "{Number TYPE}",
    "cache-lock-stale": "{Number TYPE}",
    "cache-lock-wait": "{Number TYPE}",
    "cache-max": "{Number TYPE}",
    "cache-min": "{Number TYPE}",
    "cafile": "{PATH MODULE}",
    "call": "{String TYPE}",
    "cert": Array [
      null,
      "{String TYPE}",
    ],
    "cidr": Array [
      null,
      "{String TYPE}",
      "{Array TYPE}",
    ],
    "color": Array [
      "always",
      "{Boolean TYPE}",
    ],
    "commit-hooks": "{Boolean TYPE}",
    "depth": Array [
      null,
      "{Number TYPE}",
    ],
    "description": "{Boolean TYPE}",
    "dev": "{Boolean TYPE}",
    "dry-run": "{Boolean TYPE}",
    "editor": "{String TYPE}",
    "engine-strict": "{Boolean TYPE}",
    "fetch-retries": "{Number TYPE}",
    "fetch-retry-factor": "{Number TYPE}",
    "fetch-retry-maxtimeout": "{Number TYPE}",
    "fetch-retry-mintimeout": "{Number TYPE}",
    "force": "{Boolean TYPE}",
    "format-package-lock": "{Boolean TYPE}",
    "fund": "{Boolean TYPE}",
    "git": "{String TYPE}",
    "git-tag-version": "{Boolean TYPE}",
    "global": "{Boolean TYPE}",
    "global-style": "{Boolean TYPE}",
    "globalconfig": "{PATH MODULE}",
    "group": Array [
      "{Number TYPE}",
      "{String TYPE}",
    ],
    "heading": "{String TYPE}",
    "https-proxy": Array [
      null,
      "{URL MODULE}",
    ],
    "if-present": "{Boolean TYPE}",
    "ignore-prepublish": "{Boolean TYPE}",
    "ignore-scripts": "{Boolean TYPE}",
    "include": Array [
      "{Array TYPE}",
      "prod",
      "dev",
      "optional",
      "peer",
    ],
    "include-staged": "{Boolean TYPE}",
    "init-author-email": "{String TYPE}",
    "init-author-name": "{String TYPE}",
    "init-author-url": Array [
      "",
      "{URL MODULE}",
    ],
    "init-license": "{String TYPE}",
    "init-module": "{PATH MODULE}",
    "init-version": "{SEMVER MODULE}",
    "json": "{Boolean TYPE}",
    "key": Array [
      null,
      "{String TYPE}",
    ],
    "legacy-bundling": "{Boolean TYPE}",
    "legacy-peer-deps": "{Boolean TYPE}",
    "link": "{Boolean TYPE}",
    "local-address": Array [
      undefined,
      "127.0.0.1",
      "no place like home",
    ],
    "loglevel": Array [
      "silent",
      "error",
      "warn",
      "notice",
      "http",
      "timing",
      "info",
      "verbose",
      "silly",
    ],
    "logs-max": "{Number TYPE}",
    "long": "{Boolean TYPE}",
    "maxsockets": "{Number TYPE}",
    "message": "{String TYPE}",
    "metrics-registry": Array [
      null,
      "{String TYPE}",
    ],
    "node-options": Array [
      null,
      "{String TYPE}",
    ],
    "node-version": Array [
      null,
      "{SEMVER MODULE}",
    ],
    "noproxy": Array [
      null,
      "{String TYPE}",
      "{Array TYPE}",
    ],
    "offline": "{Boolean TYPE}",
    "omit": Array [
      "{Array TYPE}",
      "dev",
      "optional",
      "peer",
    ],
    "only": Array [
      null,
      "dev",
      "development",
      "prod",
      "production",
    ],
    "optional": "{Boolean TYPE}",
    "otp": Array [
      null,
      "{String TYPE}",
    ],
    "package": Array [
      "{String TYPE}",
      "{Array TYPE}",
    ],
    "package-lock": "{Boolean TYPE}",
    "package-lock-only": "{Boolean TYPE}",
    "parseable": "{Boolean TYPE}",
    "prefer-offline": "{Boolean TYPE}",
    "prefer-online": "{Boolean TYPE}",
    "prefix": "{PATH MODULE}",
    "preid": "{String TYPE}",
    "production": "{Boolean TYPE}",
    "progress": "{Boolean TYPE}",
    "proxy": Array [
      null,
      false,
      "{URL MODULE}",
    ],
    "read-only": "{Boolean TYPE}",
    "rebuild-bundle": "{Boolean TYPE}",
    "registry": Array [
      null,
      "{URL MODULE}",
    ],
    "rollback": "{Boolean TYPE}",
    "save": "{Boolean TYPE}",
    "save-bundle": "{Boolean TYPE}",
    "save-dev": "{Boolean TYPE}",
    "save-exact": "{Boolean TYPE}",
    "save-optional": "{Boolean TYPE}",
    "save-prefix": "{String TYPE}",
    "save-prod": "{Boolean TYPE}",
    "scope": "{String TYPE}",
    "script-shell": Array [
      null,
      "{String TYPE}",
    ],
    "scripts-prepend-node-path": Array [
      "{Boolean TYPE}",
      "auto",
      "warn-only",
    ],
    "searchexclude": Array [
      null,
      "{String TYPE}",
    ],
    "searchlimit": "{Number TYPE}",
    "searchopts": "{String TYPE}",
    "searchstaleness": "{Number TYPE}",
    "send-metrics": "{Boolean TYPE}",
    "shell": "{String TYPE}",
    "shrinkwrap": "{Boolean TYPE}",
    "sign-git-commit": "{Boolean TYPE}",
    "sign-git-tag": "{Boolean TYPE}",
    "sso-poll-frequency": "{Number TYPE}",
    "sso-type": Array [
      null,
      "oauth",
      "saml",
    ],
    "strict-peer-deps": "{Boolean TYPE}",
    "strict-ssl": "{Boolean TYPE}",
    "tag": "{String TYPE}",
    "tag-version-prefix": "{String TYPE}",
    "timing": "{Boolean TYPE}",
    "tmp": "{PATH MODULE}",
    "umask": "{Umask TYPE}",
    "unicode": "{Boolean TYPE}",
    "update-notifier": "{Boolean TYPE}",
    "usage": "{Boolean TYPE}",
    "user-agent": "{String TYPE}",
    "userconfig": "{PATH MODULE}",
    "version": "{Boolean TYPE}",
    "versions": "{Boolean TYPE}",
    "viewer": "{String TYPE}",
  },
}
`
