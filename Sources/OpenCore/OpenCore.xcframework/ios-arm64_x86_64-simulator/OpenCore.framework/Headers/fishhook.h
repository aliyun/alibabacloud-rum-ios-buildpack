#ifndef fishhook_h
#define fishhook_h

#include <stddef.h>
#include <stdint.h>

#define OR_FISHHOOK_EXPORT 1

#if !defined(OR_FISHHOOK_EXPORT)
#define OR_FISHHOOK_VISIBILITY __attribute__((visibility("hidden")))
#else
#define OR_FISHHOOK_VISIBILITY __attribute__((visibility("default")))
#endif

#ifdef __cplusplus
extern "C" {
#endif //__cplusplus

/*
 * A structure representing a particular intended rebinding from a symbol
 * name to its replacement
 */
struct or_rebinding {
  const char *name;
  void *replacement;
  void **replaced;
};

/*
 * For each rebinding in rebindings, rebinds references to external, indirect
 * symbols with the specified name to instead point at replacement for each
 * image in the calling process as well as for all future images that are loaded
 * by the process. If rebind_functions is called more than once, the symbols to
 * rebind are added to the existing list of rebindings, and if a given symbol
 * is rebound more than once, the later rebinding will take precedence.
 */
OR_FISHHOOK_VISIBILITY
int or_rebind_symbols(struct or_rebinding rebindings[], size_t rebindings_nel);

/*
 * Rebinds as above, but only in the specified image. The header should point
 * to the mach-o header, the slide should be the slide offset. Others as above.
 */
OR_FISHHOOK_VISIBILITY
int or_rebind_symbols_image(void *header,
                         intptr_t slide,
                         struct or_rebinding rebindings[],
                         size_t rebindings_nel);

#ifdef __cplusplus
}
#endif //__cplusplus

#endif //fishhook_h

