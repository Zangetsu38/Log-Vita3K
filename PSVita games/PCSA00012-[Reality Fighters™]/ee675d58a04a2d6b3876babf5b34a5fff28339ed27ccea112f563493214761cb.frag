// Fragment shader.
#version 120

uniform ?vec3 lightColor;
uniform ?vec3 ambientColor;
uniform float specularExponent;
uniform sampler2D diffuse;
uniform sampler2D shadowsampler;
uniform sampler2D normalsampler;
uniform sampler2D specularsampler;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
