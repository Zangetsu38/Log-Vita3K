// Fragment shader.
#version 120

uniform struct {
   vec4 ambientColor;
   vec4 diffuseColor;
   vec4 specularColor;
} uniLightColor;
uniform sampler2D diffuse;
uniform sampler2D normal;
uniform sampler2D spec;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
