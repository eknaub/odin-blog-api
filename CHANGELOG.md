# 1.0.0 (2025-07-24)

## 1.0.0

### Major Changes

- bb8c22a: test

### Bug Fixes

- add guard for login/register routes if user is logged in, login/register tests ([bed0957](https://github.com/eknaub/odin-blog-api/commit/bed0957df72ef584a53f4824786c3505d94da020))
- credential issues, test FE to BE endpoint connections and fix issues ([e0a45c6](https://github.com/eknaub/odin-blog-api/commit/e0a45c641150283732dfc354f343ed88dedbfa47))
- enum routenames, WIP usermenu ([6885fa7](https://github.com/eknaub/odin-blog-api/commit/6885fa77e9b5f38627d50dd79069d639e1f04424))
- folder structure, dashboard content layout strucutre ([e60ba41](https://github.com/eknaub/odin-blog-api/commit/e60ba418fbcf05fc2c4221d575d62359cc62b675))
- follower dto, change refStragety (issues with same baseuserschema) ([a110e58](https://github.com/eknaub/odin-blog-api/commit/a110e58ce5bd7c6fe9263a93e85a7496a0018145))
- follower service buggy ([cd65eb2](https://github.com/eknaub/odin-blog-api/commit/cd65eb23841ffa7e029cc7c51369fb8d932de87d))
- include codeql nside ci ([3b4a492](https://github.com/eknaub/odin-blog-api/commit/3b4a4924170fea8e98bd0f23d75611387cef73fe))
- lazy load some routes, logging service, notfound page ([dbfd715](https://github.com/eknaub/odin-blog-api/commit/dbfd715bf96f6fd27a7c93281b1e009b347473db))
- login/register validators + QoL ([92cd1cb](https://github.com/eknaub/odin-blog-api/commit/92cd1cbea0c32caf4e902db1d276691bc3a061eb))
- missing auth ([aff904b](https://github.com/eknaub/odin-blog-api/commit/aff904b3f11d6a2c36ca5509f2ce2191fb8ac14c))
- not needed ([bb41ee7](https://github.com/eknaub/odin-blog-api/commit/bb41ee72f8c265ac010e2dc75116a5f7c0f8b86d))
- refactor controllers ([29a4069](https://github.com/eknaub/odin-blog-api/commit/29a4069e5b766a7451f0e8a2c30129abf7beee59))
- show username instead of id for posts and comments, finish validation for all input fields in fe and be ([f4c1de1](https://github.com/eknaub/odin-blog-api/commit/f4c1de1bacca1f27a52efc8e1689dbfe6e6ccfc1))
- wrong imports, generic profile and settings page ([a8d1b1b](https://github.com/eknaub/odin-blog-api/commit/a8d1b1b093576115446b4e2d17918a670297615c))

### Features

- add angular material ui-ing ([acb7d2c](https://github.com/eknaub/odin-blog-api/commit/acb7d2cc18342bec88ff0549fa1e2c509a7b1399))
- add auth, centralized response handling ([0df32a9](https://github.com/eknaub/odin-blog-api/commit/0df32a91050e29df9623656df539ef7724a6b105))
- add authguard and local auth service ([2abbea9](https://github.com/eknaub/odin-blog-api/commit/2abbea92712c366a36ff2e87643501b7d2070e11))
- add global loading ([f597b16](https://github.com/eknaub/odin-blog-api/commit/f597b166a73c7deb865d84e1b71685dad67c3cdc))
- add http interceptors ([f098e56](https://github.com/eknaub/odin-blog-api/commit/f098e56a9db5ab8ddc544e18b5e2d6c3b91034bf))
- add prettier and eslint to BE, validate all endpoints with middleware + zod, refactor routes ([2f67cf1](https://github.com/eknaub/odin-blog-api/commit/2f67cf199fd0108dc19dacb6b86f561d5775c861))
- adjust BE dtos, add possibility to create posts/comments, ui changes ([6983a52](https://github.com/eknaub/odin-blog-api/commit/6983a521c5ce093e3aeade2f8f41a333bc2a279c))
- BE add tags/categories to posts ([61cc971](https://github.com/eknaub/odin-blog-api/commit/61cc97154ad6010584a2b0e2ccf51cb1b7c03f29))
- categories in FE, WIP tags ([e128e2a](https://github.com/eknaub/odin-blog-api/commit/e128e2a41dc9a009f1d239f972eaff45c24ca336))
- connect other endpoints to real db ([55baa08](https://github.com/eknaub/odin-blog-api/commit/55baa0884d85449fb2aa3c650df227021506f576))
- create swagger ui, adjust dtos, generate dtos in FE from swagger and use them everywhere ([f5bccc3](https://github.com/eknaub/odin-blog-api/commit/f5bccc3979bacafefca986ee320e1bc330320f46))
- follow/following users feature in BE, generate models and services in FE ([8dc27df](https://github.com/eknaub/odin-blog-api/commit/8dc27df9b066fb0d0ab4434da12994792adebad5))
- follow/unfollow users in FE ([8304e62](https://github.com/eknaub/odin-blog-api/commit/8304e6275098268432a80cb8d040fcc4e241e6f4))
- german translations, some css magic ([0d45a32](https://github.com/eknaub/odin-blog-api/commit/0d45a32fe13d23647634190facaa4a459e9b3019))
- implement google genimi to let the user generate blog content based on the entered title ([ca7dd6a](https://github.com/eknaub/odin-blog-api/commit/ca7dd6a5ca451394f75c7fee7d1ded2edc1d4abe))
- implement tags/categories in BE, refactor request validation into different files ([75ccd7b](https://github.com/eknaub/odin-blog-api/commit/75ccd7be3e5109e556835c8bcfb846c40012a805))
- more testing ([5d211a4](https://github.com/eknaub/odin-blog-api/commit/5d211a4ec68750528b0329bfe09c88a62cc566c1))
- pump those rookie coverage numbers up ([41b176e](https://github.com/eknaub/odin-blog-api/commit/41b176eb8d460ef024834bdade49d70d2504c65f))
- stylings ([018d8e4](https://github.com/eknaub/odin-blog-api/commit/018d8e4e9e64810a0621017e82a90cd5fb78605a))
- tags in FE ([d913cab](https://github.com/eknaub/odin-blog-api/commit/d913cab406d33ecfbe527b7afa9811b209f3e286))
- update schema for post/comment upvotes and categories/tags for posts ([317d176](https://github.com/eknaub/odin-blog-api/commit/317d17629db403b212f0f7b5047d2fe7a1d743b9))
- use generated http services ([f19d3e4](https://github.com/eknaub/odin-blog-api/commit/f19d3e48f45955e0355db0742aaa6715dc16b75d))
- use resoure instead of httpresource ([fd1b47c](https://github.com/eknaub/odin-blog-api/commit/fd1b47c1318c8ae6d843666b24e22f7a2be943fd))
- user profile view ([99a075c](https://github.com/eknaub/odin-blog-api/commit/99a075ccaec02603f9e0d522c298d6248e79c2ae))
- workflows ([c68edff](https://github.com/eknaub/odin-blog-api/commit/c68edff0eaa10931959a066a77c32fdad7242b0a))
