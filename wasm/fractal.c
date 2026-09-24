#include <stdint.h>

#define MAX_W 1600
#define MAX_H 1200
static uint8_t pixels[MAX_W * MAX_H * 4];

__attribute__((export_name("render")))
uint32_t render(double cx, double cy, double scale, int width, int height, int max_iter) {
    if (width < 1) width = 1; if (height < 1) height = 1;
    if (width > MAX_W) width = MAX_W; if (height > MAX_H) height = MAX_H;
    if (max_iter < 1) max_iter = 1; if (max_iter > 2000) max_iter = 2000;
    double aspect = (double)width / (double)height;
    for (int y=0; y<height; ++y) {
        for (int x=0; x<width; ++x) {
            double zx = cx + (((double)x/(width-1))-0.5) * scale * aspect;
            double zy = cy + (((double)y/(height-1))-0.5) * scale;
            double ox=zx, oy=zy;
            int i=0;
            for (; i<max_iter && zx*zx+zy*zy <= 16.0; ++i) {
                double xx = zx*zx - zy*zy + ox;
                zy = 2.0*zx*zy + oy; zx = xx;
            }
            uint32_t p=(uint32_t)(y*width+x)*4;
            if (i==max_iter) { pixels[p]=4; pixels[p+1]=5; pixels[p+2]=12; pixels[p+3]=255; }
            else {
                double t=(double)i/max_iter;
                uint8_t r=(uint8_t)(255.0*t*t);
                uint8_t g=(uint8_t)(255.0*t);
                uint8_t b=(uint8_t)(180.0+75.0*(1.0-t));
                pixels[p]=r; pixels[p+1]=g; pixels[p+2]=b; pixels[p+3]=255;
            }
        }
    }
    return (uint32_t)(uintptr_t)pixels;
}

__attribute__((export_name("memory_size")))
uint32_t memory_size(void) { return sizeof(pixels); }
