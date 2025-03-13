<?php

/**
 * @file
 * Theme_name.theme.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function test_theme_form_system_theme_settings_alter(&$form, FormStateInterface $form_state) {
  // Add a text field for a custom footer message.
  $form['custom_footer_text'] = [
    '#type' => 'textfield',
    '#title' => t('Custom Footer Text'),
    '#default_value' => theme_get_setting('custom_footer_text'),
    '#description' => t('Enter a custom footer message for the site.'),
  ];
  // Add a color field for the background color.
  $form['custom_bg_color'] = [
    '#type' => 'color',
    '#title' => t('Background Color'),
    '#default_value' => theme_get_setting('custom_bg_color', '#FFFFFF'),
    '#description' => t('Choose a background color for the site.'),
  ];
  // Add a checkbox for enabling/disabling dark mode.
  $form['enable_dark_mode'] = [
    '#type' => 'checkbox',
    '#title' => t('Enable Dark Mode'),
    '#default_value' => theme_get_setting('enable_dark_mode', FALSE),
    '#description' => t('Check this box to enable dark mode.'),
  ];

  // Add a custom footer text field.
  $form['custom_site_name'] = [
    '#type' => 'textfield',
    '#title' => t('Custom Site Name'),
    '#default_value' => theme_get_setting('custom_site_name'),
    '#description' => t('Enter a custom Site Name.'),
  ];
}

/**
 * Implements hook_theme_suggestions_page_alter().
 */
function theme_name_theme_suggestions_page_alter(array &$suggestions, array $variables) {
  $current_path = \Drupal::service('path.current')->getPath();

  if ($current_path == '/recipes') {
    $suggestions[] = 'page__recipes';
  }
  elseif ($current_path == '/featured') {
    $suggestions[] = 'page__featured';
  }
}

/**
 * Implements hook_preprocess_page().
 */
function theme_name_preprocess_page(&$variables) {
  // Add variables for the hero section on the homepage.
  if ($variables['is_front']) {
    $variables['hero_title'] = t('Discover Delicious Recipes');
    $variables['hero_description'] = t('Explore our collection of mouth-watering recipes from around the world. From quick weekday meals to gourmet dishes.');
    $variables['hero_image'] = theme_get_setting('hero_image') ?: '/themes/custom/theme_name/images/hero-default.jpg';
  }
}
