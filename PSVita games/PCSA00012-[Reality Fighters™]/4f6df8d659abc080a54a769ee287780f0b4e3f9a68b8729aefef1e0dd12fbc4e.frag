// Fragment shader.
#version 120

uniform float specularExponent;
uniform sampler2D depthsampler;
uniform sampler2D diffuse;
uniform sampler2D background;
uniform sampler2D normalsampler;
uniform sampler2D specularsampler;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
