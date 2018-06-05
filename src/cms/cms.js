import React from "react";
import CMS from "netlify-cms";
import "netlify-cms/dist/cms.css";

import PrivacyBotsPagePreview from './preview-templates/PrivacyBotsPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('privacy-bots', PrivacyBotsPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview)
