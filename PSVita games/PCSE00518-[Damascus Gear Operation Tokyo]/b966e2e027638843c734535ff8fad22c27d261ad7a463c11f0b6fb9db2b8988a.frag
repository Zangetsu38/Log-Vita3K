// Fragment shader.
#version 120

uniform vec4 uniColor;
uniform struct {
   vec4 ambientColor;
   vec4 diffuseColor;
   vec4 specularColor;
uniform struct {
   vec4 ambientColor;
   vec4 diffuseColor;
   vec4 specularColor;
} uniPointLightColor1;
uniform sampler2D diffuse;
uniform sampler2D normal;
uniform sampler2D spec;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
