// Fragment shader.
#version 120

uniform ?vec3 lightColor;
uniform sampler2D diffuse;
uniform sampler2D normalsampler;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
