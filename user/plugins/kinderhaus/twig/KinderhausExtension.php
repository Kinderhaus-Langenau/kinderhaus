<?php
namespace Grav\Plugin;

use \Grav\Common\Grav;

class KinderhausExtension extends \Twig_Extension
{
  public function __construct() {
    $this->grav = Grav::instance();
  }

  public function generatePolaroid($img, $title = null, $alignment = null, $rotation = 0) {
    switch ($alignment) {
    case 'mitte':
      $alignment = 'align-center';
      break;
    case 'rechts':
      $alignment = 'align-right';
      break;
    case 'links':
    default:
      $alignment = 'align-left';
    }

    return $this->grav['twig']->processTemplate('partials/polaroid.html.twig',
                                                [
                                                 'page' => $this->grav['page'],
                                                 'image' => $img,
                                                 'title' => $title,
                                                 'classes' => $alignment,
                                                 'rotation' => $rotation
                                                ]
    );
  }

  public function getFunctions()
  {
    return [
      new \Twig_SimpleFunction('polaroid', [$this, 'generatePolaroid'])
    ];
  }
}
