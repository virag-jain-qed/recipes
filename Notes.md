Use the base theme regions
1. Create a page.html to show just the sections
2. Create sectional templates




node--recipe--teaser.html.twig (for recipe cards)
views-view--featured-recipes.html.twig (for featured recipes section)
views-view--recipes.html.twig (for all recipes page)
block--recipes-hero.html.twig (for homepage hero)




<div class="region region--highlighted grid-full layout--pass--content-medium">
    

<!-- THEME DEBUG -->
<!-- THEME HOOK: 'block' -->
<!-- FILE NAME SUGGESTIONS:
   ▪️ block--highlighted--id--test-theme-views-block--featured-recipes-block-1.html.twig
   ▪️ block--highlighted.html.twig
   ▪️ block--test-theme-views-block--featured-recipes-block-1.html.twig
   ▪️ block--views-block--featured-recipes-block-1.html.twig
   ▪️ block--views-block.html.twig
   ▪️ block--views.html.twig
   ✅ block.html.twig
-->
<!-- INVALID FILE NAME SUGGESTIONS:
   See https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Render!theme.api.php/function/hook_theme_suggestions_alter
   block__highlighted__plugin_id__views_block:featured_recipes-block_1
-->
<!-- BEGIN OUTPUT from 'core/themes/olivero/templates/block/block.html.twig' -->


<div class="views-element-container contextual-region block block-views block-views-blockfeatured-recipes-block-1" id="block-test-theme-views-block-featured-recipes-block-1">
  
      <h2 class="block__title">Featured Recipes</h2>
    <div data-contextual-id="block:block=test_theme_views_block__featured_recipes_block_1:langcode=en|entity.view.edit_form:view=featured_recipes:location=block&amp;name=featured_recipes&amp;display_id=block_1&amp;langcode=en" data-contextual-token="LAmiSD7biz3ZuLZerKyY9jt8xHItZUu30JhIGcvtD8Q" data-drupal-ajax-container="" data-once="contextual-render" class="contextual"><button class="trigger focusable visually-hidden" type="button" aria-pressed="false">Open Featured Recipes configuration options</button>

<!-- THEME DEBUG -->
<!-- THEME HOOK: 'links__contextual' -->
<!-- FILE NAME SUGGESTIONS:
   ▪️ links--contextual.html.twig
   ✅ links.html.twig
-->
<!-- BEGIN OUTPUT from 'core/themes/olivero/templates/navigation/links.html.twig' -->
<ul class="contextual-links" hidden="">
          <li><a href="/admin/structure/block/manage/test_theme_views_block__featured_recipes_block_1?destination=/">Configure block</a></li>
          <li><a href="/admin/structure/block/manage/test_theme_views_block__featured_recipes_block_1/delete?destination=/">Remove block</a></li>
          <li><a href="/admin/structure/views/view/featured_recipes/edit/block_1?destination=/">Edit view</a></li>
      </ul>
<!-- END OUTPUT from 'core/themes/olivero/templates/navigation/links.html.twig' -->

</div>
      <div class="block__content">
      

<!-- THEME DEBUG -->
<!-- THEME HOOK: 'container' -->
<!-- BEGIN OUTPUT from 'core/modules/system/templates/container.html.twig' -->
<div>

<!-- THEME DEBUG -->
<!-- THEME HOOK: 'views_view' -->
<!-- BEGIN OUTPUT from 'core/themes/olivero/templates/views/views-view.html.twig' -->
<div class="contextual-region view view-featured-recipes view-id-featured_recipes view-display-id-block_1 js-view-dom-id-a3ec0f1fc8f040de0dcb5c17026fddf77c257a41ec83f7b3437ae35dbcab4971">
  
    <div data-contextual-id="entity.view.edit_form:view=featured_recipes:location=block&amp;name=featured_recipes&amp;display_id=block_1&amp;langcode=en" data-contextual-token="q7Pix9AAkmOAk8ILwK-GTVbPH6rgM-a0NG6QhQfshxQ" data-drupal-ajax-container="" data-once="contextual-render" class="contextual"><button class="trigger focusable visually-hidden" type="button" aria-pressed="false">Open Gemino Refoveo Similis Tincidunt configuration options</button>

<!-- THEME DEBUG -->
<!-- THEME HOOK: 'links__contextual' -->
<!-- FILE NAME SUGGESTIONS:
   ▪️ links--contextual.html.twig
   ✅ links.html.twig
-->
<!-- BEGIN OUTPUT from 'core/themes/olivero/templates/navigation/links.html.twig' -->
<ul class="contextual-links" hidden="">
          <li><a href="/admin/structure/views/view/featured_recipes/edit/block_1?destination=/">Edit view</a></li>
      </ul>
<!-- END OUTPUT from 'core/themes/olivero/templates/navigation/links.html.twig' -->

</div>
      
      <div class="view-content">
      

<!-- THEME DEBUG -->
<!-- THEME HOOK: 'views_view_grid_responsive' -->
<!-- BEGIN OUTPUT from 'core/modules/views/templates/views-view-grid-responsive.html.twig' -->





<div class="views-view-responsive-grid views-view-responsive-grid--horizontal" style="--views-responsive-grid--column-count:3;--views-responsive-grid--cell-min-width:100px;--views-responsive-grid--layout-gap:10px;">
      <div class="views-view-responsive-grid__item">
      <div class="views-view-responsive-grid__item-inner">

<!-- THEME DEBUG -->
<!-- THEME HOOK: 'node' -->
<!-- FILE NAME SUGGESTIONS:
   ▪️ node--view--featured-recipes--block-1.html.twig
   ▪️ node--view--featured-recipes.html.twig
   ▪️ node--24--card.html.twig
   ▪️ node--24.html.twig
   ✅ node--recipe--card.html.twig
   ▪️ node--recipe.html.twig
   ▪️ node--card.html.twig
   ▪️ node.html.twig
-->
<!-- 💡 BEGIN CUSTOM TEMPLATE OUTPUT from 'themes/test_theme/templates/layout/node--recipe--card.html.twig' -->


<article data-history-node-id="24" class="contextual-region node node--type-recipe node--view-mode-card relative overflow-hidden rounded-lg border bg-card shadow transition-shadow hover:shadow-lg">
  <!-- Image -->
  <div class="relative rounded-full">
    

<!-- THEME DEBUG -->
<!-- THEME HOOK: 'field' -->
<!-- FILE NAME SUGGESTIONS:
   ▪️ field--node--field-recipe-image--recipe.html.twig
   ▪️ field--node--field-recipe-image.html.twig
   ▪️ field--node--recipe.html.twig
   ▪️ field--field-recipe-image.html.twig
   ▪️ field--entity-reference.html.twig
   ✅ field.html.twig
-->
<!-- BEGIN OUTPUT from 'core/themes/olivero/templates/field/field.html.twig' -->

            <div class="field field--name-field-recipe-image field--type-entity-reference field--label-hidden field__item">

<!-- THEME DEBUG -->
<!-- THEME HOOK: 'media' -->
<!-- FILE NAME SUGGESTIONS:
   ▪️ media--source-image.html.twig
   ▪️ media--image--default.html.twig
   ▪️ media--image.html.twig
   ▪️ media--default.html.twig
   ✅ media.html.twig
-->
<!-- BEGIN OUTPUT from 'core/themes/olivero/templates/content/media.html.twig' -->
<div class="contextual-region media media--type-image media--view-mode-default">
  <div data-contextual-id="media:media=1:changed=1729787768&amp;langcode=en" data-contextual-token="waFfwMlOOWNs6oMfBuVHaAlrskF3O5zk-PT4gm3IRaY" data-drupal-ajax-container="" data-once="contextual-render" class="contextual"><button class="trigger focusable visually-hidden" type="button" aria-pressed="false">Open  configuration options</button>

<!-- THEME DEBUG -->
<!-- THEME HOOK: 'links__contextual' -->
<!-- FILE NAME SUGGESTIONS:
   ▪️ links--contextual.html.twig
   ✅ links.html.twig
-->
<!-- BEGIN OUTPUT from 'core/themes/olivero/templates/navigation/links.html.twig' -->
<ul class="contextual-links" hidden="">
          <li><a href="/media/1/edit?destination=/">Edit</a></li>
          <li><a href="/media/1/delete?destination=/">Delete</a></li>
      </ul>
<!-- END OUTPUT from 'core/themes/olivero/templates/navigation/links.html.twig' -->

</div>
      

<!-- THEME DEBUG -->
<!-- THEME HOOK: 'field' -->
<!-- FILE NAME SUGGESTIONS:
   ▪️ field--media--field-media-image--image.html.twig
   ▪️ field--media--field-media-image.html.twig
   ▪️ field--media--image.html.twig
   ▪️ field--field-media-image.html.twig
   ▪️ field--image.html.twig
   ✅ field.html.twig
-->
<!-- BEGIN OUTPUT from 'core/themes/olivero/templates/field/field.html.twig' -->

  <div class="field field--name-field-media-image field--type-image field--label-visually_hidden">
    <div class="field__label visually-hidden">Image</div>
              <div class="field__item">

<!-- THEME DEBUG -->
<!-- THEME HOOK: 'image_formatter' -->
<!-- BEGIN OUTPUT from 'core/modules/image/templates/image-formatter.html.twig' -->
  

<!-- THEME DEBUG -->
<!-- THEME HOOK: 'image_style' -->
<!-- BEGIN OUTPUT from 'core/modules/image/templates/image-style.html.twig' -->


<!-- THEME DEBUG -->
<!-- THEME HOOK: 'image' -->
<!-- BEGIN OUTPUT from 'core/modules/system/templates/image.html.twig' -->
<img loading="lazy" src="/sites/default/files/styles/large/public/2025-02/generateImage_BAfka7.gif.webp?itok=jukcG6HQ" width="406" height="480" alt="Abbas accumsan consequat populus roto ut." title="Abico damnum defui dolus lenis loquor ludus virtus.">

<!-- END OUTPUT from 'core/modules/system/templates/image.html.twig' -->



<!-- END OUTPUT from 'core/modules/image/templates/image-style.html.twig' -->



<!-- END OUTPUT from 'core/modules/image/templates/image-formatter.html.twig' -->

</div>
          </div>

<!-- END OUTPUT from 'core/themes/olivero/templates/field/field.html.twig' -->


  </div>

<!-- END OUTPUT from 'core/themes/olivero/templates/content/media.html.twig' -->

</div>
      
<!-- END OUTPUT from 'core/themes/olivero/templates/field/field.html.twig' -->


          <div class="absolute right-2 top-2 rounded px-1 py-0.5 text-sm text-white bg-orange-500 ">
        Featured
      </div>
      </div>

  <!-- Content -->
  <div class="p-4 text-center">
    <h2 class="text-lg font-semibold mb-2">
      <a href="/recipes/24" rel="bookmark">

<!-- THEME DEBUG -->
<!-- THEME HOOK: 'field' -->
<!-- FILE NAME SUGGESTIONS:
   ▪️ field--node--title--recipe.html.twig
   ✅ field--node--title.html.twig
   ▪️ field--node--recipe.html.twig
   ▪️ field--title.html.twig
   ▪️ field--string.html.twig
   ▪️ field.html.twig
-->
<!-- BEGIN OUTPUT from 'core/modules/node/templates/field--node--title.html.twig' -->

<span>Gemino Refoveo Similis Tincidunt</span>

<!-- END OUTPUT from 'core/modules/node/templates/field--node--title.html.twig' -->

</a>
    </h2>

    <div class="flex flex-col items-start text-gray-600 p-2">
        <div class="flex items-center gap-1 justify-center">
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
           <p class="mt-2 text-sm font-medium text-gray-500">62 mins</p>
      </div>
    
              <div class="flex items-center gap-1">
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
        

<!-- THEME DEBUG -->
<!-- THEME HOOK: 'field' -->
<!-- FILE NAME SUGGESTIONS:
   ▪️ field--node--field-difficulty--recipe.html.twig
   ▪️ field--node--field-difficulty.html.twig
   ▪️ field--node--recipe.html.twig
   ▪️ field--field-difficulty.html.twig
   ▪️ field--list-string.html.twig
   ✅ field.html.twig
-->
<!-- BEGIN OUTPUT from 'core/themes/olivero/templates/field/field.html.twig' -->

  <div class="field field--name-field-difficulty field--type-list-string field--label-inline clearfix">
    <div class="field__label">Difficulty</div>
              <div class="field__item">Easy</div>
          </div>

<!-- END OUTPUT from 'core/themes/olivero/templates/field/field.html.twig' -->


      </div>
      
      </div>
  </div>
</article>

<!-- END CUSTOM TEMPLATE OUTPUT from 'themes/test_theme/templates/layout/node--recipe--card.html.twig' -->

</div>
    </div>
      <div class="views-view-responsive-grid__item">
      <div class="views-view-responsive-grid__item-inner">

