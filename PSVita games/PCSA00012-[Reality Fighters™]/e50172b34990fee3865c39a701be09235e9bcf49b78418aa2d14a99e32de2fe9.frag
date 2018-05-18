// Fragment shader.
#version 120

uniform float g_fFocalWidth;
uniform float g_fFocalDistance;
uniform float QN;
uniform float Q;
uniform vec2 g_vFilterTaps[24];
uniform vec2 texcoord_scale_values;
uniform sampler2D diffuse;
uniform sampler2D depth;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}
