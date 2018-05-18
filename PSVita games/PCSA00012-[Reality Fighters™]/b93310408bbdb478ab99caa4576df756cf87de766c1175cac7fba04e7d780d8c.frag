// Fragment shader.
#version 120

uniform vec2 sketchJitter;
uniform sampler2D diffuse;
uniform sampler2D sketchSampler;
uniform sampler2D mask;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
