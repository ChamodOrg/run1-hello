#!/bin/sh
# Copyright (c) 2026, WSO2 LLC. (https://www.wso2.com).
#
# WSO2 LLC. licenses this file to you under the Apache License,
# Version 2.0 (the "License"); you may not use this file except
# in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.

# Runs from official nginx:alpine /docker-entrypoint.d/ before nginx starts.
# Do not exec nginx here; the image ENTRYPOINT does that.
#
# hello-webapp has no sibling API, so there is nothing to template: the conf is
# only copied from its baked-in, read-only template into /dev/shm/nginx, the
# directory nginx.conf includes and keeps its pid and temp files in. The root
# filesystem is read-only in the cloud, so every runtime write lives there.

set -e

RUNTIME_DIR=/dev/shm/nginx
mkdir -p "$RUNTIME_DIR"
cp /etc/nginx/aep/default.conf "$RUNTIME_DIR/default.conf"
echo "aep-api-proxy: no upstream API configured; serving static files only"
