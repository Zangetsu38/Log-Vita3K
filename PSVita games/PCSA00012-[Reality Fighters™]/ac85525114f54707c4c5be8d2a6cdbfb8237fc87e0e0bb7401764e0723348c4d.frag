// Fragment shader.
#version 120

uniform float BloomThreshold;
uniform sampler2D sceneTexture;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
