/* vim:set ts=2 sw=2 sts=2 et: */
/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is jquery-mod.
 *
 * The Initial Developer of the Original Code is the Mozilla Foundation.
 * Portions created by the Initial Developer are Copyright (C) 2011
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   Irakli Gozalishvili <rfobic@gmail.com> (Original Author)
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

"use strict";

const { data } = require("self");
const { PageMod } = require("page-mod");
const tabs = require("tabs");

const URL = data.url("index.html");

PageMod({
    include: URL,
    contentScriptWhen: "ready",
    contentScriptFile: [
      // To generate list copy all script tags from data/jquery/test/index.html
      // and run substitutions:
      // %s/<script src="/data.url("jquery\/test\//g
      // %s/><\/script>/),/g
      data.url("jquery/test/data/testinit.js"),

      data.url("jquery/test/../src/core.js"),
      data.url("jquery/test/../src/deferred.js"),
      data.url("jquery/test/../src/support.js"),
      data.url("jquery/test/../src/data.js"),
      data.url("jquery/test/../src/queue.js"),
      data.url("jquery/test/../src/attributes.js"),
      data.url("jquery/test/../src/event.js"),
      data.url("jquery/test/../src/sizzle/sizzle.js"),
      data.url("jquery/test/../src/sizzle-jquery.js"),
      data.url("jquery/test/../src/traversing.js"),
      data.url("jquery/test/../src/manipulation.js"),
      data.url("jquery/test/../src/css.js"),
      data.url("jquery/test/../src/ajax.js"),
      data.url("jquery/test/../src/ajax/jsonp.js"),
      data.url("jquery/test/../src/ajax/script.js"),
      data.url("jquery/test/../src/ajax/xhr.js"),
      data.url("jquery/test/../src/effects.js"),
      data.url("jquery/test/../src/offset.js"),
      data.url("jquery/test/../src/dimensions.js"),

      data.url("jquery/test/qunit/qunit/qunit.js"),
      data.url("jquery/test/data/testrunner.js"),

      // IMPORTANT: We should override `isLocal` to make sure that test runner
      // does not runs test requiring a server.
      data.url("config.js"),

      data.url("jquery/test/unit/core.js"),
      data.url("jquery/test/unit/deferred.js"),
      data.url("jquery/test/unit/data.js"),
      data.url("jquery/test/unit/queue.js"),
      data.url("jquery/test/unit/attributes.js"),
      data.url("jquery/test/unit/event.js"),
      data.url("jquery/test/../src/sizzle/test/unit/selector.js"),
      data.url("jquery/test/unit/traversing.js"),
      data.url("jquery/test/unit/manipulation.js"),
      data.url("jquery/test/unit/css.js"),
      data.url("jquery/test/unit/ajax.js"),
      data.url("jquery/test/unit/effects.js"),
      data.url("jquery/test/unit/offset.js"),
      data.url("jquery/test/unit/dimensions.js")
    ]
});

tabs.activeTab.url = URL;
